require('dotenv').config();

const PORT = process.env.PORT || 8080;
const HOSTNAME = process.env.HOSTNAME || 'localhost';
const { PATH_TEAMS_DB, PATH_TEAM_DB } = process.env;

const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const mapClub = require('./module/club/mapper/clubMapper');

const upload = multer({ dest: 'clubsImages/files' });

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('clubsImages'));

function getClubs() {
  const clubs = JSON.parse(fs.readFileSync(PATH_TEAMS_DB));
  return clubs;
}

function saveClub(newClub, shieldImgFile) {
  const clubs = getClubs();
  const lastClub = clubs[clubs.length - 1];

  const clubToSave = {
    id: lastClub.id + 1,
    area: { name: newClub.nameArea, id: Number(newClub.idArea) },
    name: newClub.name,
    shortName: newClub.shortName,
    tla: newClub.tla,
    crestUrl: `http://${HOSTNAME}:${PORT}/files/${shieldImgFile.filename}`,
    address: newClub.address,
    phone: newClub.phone,
    website: newClub.website,
    email: newClub.email,
    founded: Number(newClub.founded),
    clubColors: newClub.clubColors,
    venue: newClub.venue,
  };

  clubs.push(clubToSave);

  fs.writeFileSync(PATH_TEAMS_DB, JSON.stringify(clubs));
  fs.writeFileSync(`${PATH_TEAM_DB}/${clubToSave.tla}.json`, JSON.stringify(clubToSave));
}

function updateClub(infoForUpdate, shieldImgFile, clubIdToUpdate) {
  const clubs = getClubs();

  const positionOfClubToUpdate = clubs.findIndex((club) => club.id === clubIdToUpdate);

  clubs[positionOfClubToUpdate] = {
    ...clubs[positionOfClubToUpdate],
    ...infoForUpdate,
    crestUrl: `http://${HOSTNAME}:${PORT}/files/${shieldImgFile.filename}`,
    lastUpdated: new Date().toISOString(),
  };

  fs.writeFileSync(PATH_TEAMS_DB, JSON.stringify(clubs));
  fs.writeFileSync(`${PATH_TEAM_DB}/${clubs[positionOfClubToUpdate].tla}.json`, JSON.stringify(clubs[positionOfClubToUpdate]));

  return clubs[positionOfClubToUpdate];
}

function deleteClub(clubIdToDelete) {
  const clubs = getClubs();
  const positionOfClubToDelete = clubs.findIndex((club) => club.id === clubIdToDelete);
  const clubToRemove = clubs[positionOfClubToDelete];

  clubs.splice(positionOfClubToDelete, 1);

  fs.unlinkSync(`${PATH_TEAM_DB}/${clubToRemove.tla}.json`);
  fs.writeFileSync(PATH_TEAMS_DB, JSON.stringify(clubs));

  return clubToRemove;
}

app.get('/', (req, res) => {
  const clubs = getClubs();
  res.statusCode = 200;
  res.send(clubs);
});

app.get('/clubs', (req, res) => {
  const clubs = getClubs();
  res.statusCode = 200;
  res.send(clubs);
});

app.get('/club/:id', (req, res) => {
  const clubId = Number(req.params.id);

  const clubs = getClubs();

  const clubSearched = clubs.find((club) => club.id === clubId);
  const club = mapClub(clubSearched);

  if (clubSearched === undefined) {
    res.statusCode = 204;
    res.end();
  } else {
    res.statusCode = 200;
    res.send(club);
  }
});

app.post('/clubs', upload.single('shieldImg'), (req, res) => {
  const club = req.body;
  const imgFile = req.file;

  saveClub(club, imgFile);

  res.statusCode = 201;
  res.send(club);
});

app.put('/club/:id', upload.single('shieldImg'), (req, res) => {
  const clubIdToUpdate = Number(req.params.id);

  const infoForUpdate = req.body;

  const shieldImgFile = req.file;

  const updatedClub = updateClub(infoForUpdate, shieldImgFile, clubIdToUpdate);

  res.statusCode = 200;
  res.send(updatedClub);
});

app.delete('/club/:id', (req, res) => {
  const clubIdToDelete = Number(req.params.id);

  const clubDeleted = deleteClub(clubIdToDelete);

  res.statusCode = 200;
  res.send(clubDeleted);
});

app.listen(PORT, HOSTNAME, () => {
  console.log(`Listen port in ${HOSTNAME}:${PORT} `);
});
