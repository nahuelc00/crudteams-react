/* eslint-disable import/prefer-default-export */

const mapClub = require('../mapper/clubMapper');
const { getPortAndHostname } = require('../../../env');

const { PORT, HOSTNAME } = getPortAndHostname();

class ClubController {
  constructor(clubService, upload) {
    this.clubService = clubService;
    this.upload = upload;
  }

  setupRoutes(app) {
    app.get('/', (req, res) => this.getClubs(res));
    app.get('/clubs', (req, res) => this.getClubs(res));
    app.get('/club/:id', (req, res) => this.getClub(req, res));
    app.post('/clubs', this.upload.single('shieldImg'), (req, res) => this.saveClub(req, res));
    app.put('/club/:id', this.upload.single('shieldImg'), (req, res) => this.updateClub(req, res));
    app.delete('/club/:id', (req, res) => this.deleteClub(req, res));
  }

  getClubs(response) {
    const clubs = this.clubService.getClubs();

    response.statusCode = 200;
    response.send(clubs);
  }

  getClub(req, res) {
    const clubId = Number(req.params.id);

    const clubSearched = this.clubService.getClub(clubId);
    const club = mapClub(clubSearched);

    res.statusCode = 200;
    res.send(club);
  }

  saveClub(req, res) {
    const club = req.body;
    const imgFile = req.file;

    const clubs = this.clubService.getClubs();
    const lastClub = clubs[clubs.length - 1];

    const clubToSave = {
      id: lastClub.id + 1,
      area: { name: club.nameArea, id: Number(club.idArea) },
      name: club.name,
      shortName: club.shortName,
      tla: club.tla,
      crestUrl: `http://${HOSTNAME}:${PORT}/files/${imgFile.filename}`,
      address: club.address,
      phone: club.phone,
      website: club.website,
      email: club.email,
      founded: Number(club.founded),
      clubColors: club.clubColors,
      venue: club.venue,
    };

    this.clubService.saveClub(clubToSave);

    res.statusCode = 201;
    res.send(club);
  }

  updateClub(req, res) {
    const clubIdToUpdate = Number(req.params.id);

    const infoForUpdate = { ...req.body };

    const shieldImgFile = req.file;

    const clubUpdated = {
      id: clubIdToUpdate,
      area: { id: Number(infoForUpdate.idArea), name: infoForUpdate.nameArea },
      name: infoForUpdate.name,
      shortName: infoForUpdate.shortName,
      tla: infoForUpdate.tla,
      crestUrl: `http://${HOSTNAME}:${PORT}/files/${shieldImgFile.filename}`,
      address: infoForUpdate.address,
      phone: infoForUpdate.phone,
      website: infoForUpdate.website,
      email: infoForUpdate.email,
      founded: Number(infoForUpdate.founded),
      clubColors: infoForUpdate.clubColors,
      venue: infoForUpdate.venue,
      lastUpdated: new Date().toISOString(),
    };

    this.clubService.updateClub(clubUpdated);

    res.statusCode = 200;
    res.send(clubUpdated);
  }

  deleteClub(req, res) {
    const clubIdToDelete = Number(req.params.id);

    this.clubService.deleteClub(clubIdToDelete);

    res.statusCode = 200;
    res.end();
  }
}

module.exports = ClubController;
