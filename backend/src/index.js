const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');

const upload = multer({ dest: 'clubsImages/files' });

const PORT = 8080;
const PATH_DB = './data/equipos.json';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('clubsImages'));

function getClubs() {
  const clubs = JSON.parse(fs.readFileSync(PATH_DB));
  return clubs;
}

function saveClub(newClub, shieldImgFile) {
  const clubs = getClubs();

  const lastClub = clubs[clubs.length - 1];
  // eslint-disable-next-line no-param-reassign
  newClub.id = lastClub.id + 1;
  // eslint-disable-next-line no-param-reassign
  newClub.crestUrl = `http://localhost:8080/files/${shieldImgFile.filename}`;

  clubs.push(newClub);
  fs.writeFileSync(PATH_DB, JSON.stringify(clubs));
  fs.writeFileSync(`./data/equipos/${newClub.tla}.json`, JSON.stringify(newClub));
}

function updateClub(infoForUpdate, clubIdToUpdate) {
  const clubs = getClubs();

  const positionOfClubToUpdate = clubs.findIndex((club) => club.id === clubIdToUpdate);

  clubs[positionOfClubToUpdate] = { ...clubs[positionOfClubToUpdate], ...infoForUpdate };

  fs.writeFileSync(PATH_DB, JSON.stringify(clubs));
  fs.writeFileSync(`./data/equipos/${clubs[positionOfClubToUpdate].tla}.json`, JSON.stringify(clubs[positionOfClubToUpdate]));

  return clubs[positionOfClubToUpdate];
}

function deleteClub(clubIdToDelete) {
  const clubs = getClubs();
  const positionOfClubToDelete = clubs.findIndex((club) => club.id === clubIdToDelete);
  const clubToRemove = clubs[positionOfClubToDelete];

  clubs.splice(positionOfClubToDelete, 1);

  fs.unlinkSync(`./data/equipos/${clubToRemove.tla}.json`);
  fs.writeFileSync(PATH_DB, JSON.stringify(clubs));

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

  if (clubSearched === undefined) {
    res.statusCode = 204;
    res.end();
  } else {
    res.statusCode = 200;
    res.send(clubSearched);
  }
});

app.post('/clubs', upload.single('shieldImg'), (req, res) => {
  const club = req.body;
  const imgFile = req.file;

  saveClub(club, imgFile);

  res.statusCode = 201;
  res.send(club);
});

app.put('/club/:id', (req, res) => {
  const clubIdToUpdate = Number(req.params.id);
  const infoForUpdate = req.body;

  const updatedClub = updateClub(infoForUpdate, clubIdToUpdate);

  res.statusCode = 200;
  res.send(updatedClub);
});

app.delete('/club/:id', (req, res) => {
  const clubIdToDelete = Number(req.params.id);

  const clubDeleted = deleteClub(clubIdToDelete);

  res.statusCode = 200;
  res.send(clubDeleted);
});

app.listen(PORT, () => {
  console.log(`Listen port ${PORT} in localhost`);
});
