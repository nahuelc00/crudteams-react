/* eslint-disable import/prefer-default-export */

const { buildClubForDB } = require('../../../utilities/utilities');

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

  async getClubs(response) {
    const clubs = await this.clubService.getClubs();

    response.statusCode = 200;
    response.send(clubs);
  }

  async getClub(req, res) {
    const clubId = Number(req.params.id);
    const club = await this.clubService.getClub(clubId);

    res.statusCode = 200;
    res.send(club);
  }

  async saveClub(req, res) {
    const club = req.body;
    const imgFile = req.file;

    const clubToSave = buildClubForDB(
      club,
      imgFile.filename,
    );

    await this.clubService.saveClub(clubToSave);

    res.statusCode = 201;
    res.send(clubToSave);
  }

  async updateClub(req, res) {
    const clubIdToUpdate = Number(req.params.id);
    const shieldImgFile = req.file;

    const club = { ...req.body };

    const clubUpdated = buildClubForDB(
      club,
      shieldImgFile.filename,
      clubIdToUpdate,
    );

    await this.clubService.updateClub(clubUpdated);

    res.statusCode = 200;
    res.send(clubUpdated);
  }

  async deleteClub(req, res) {
    const clubIdToDelete = Number(req.params.id);

    await this.clubService.deleteClub(clubIdToDelete);

    res.statusCode = 200;
    res.end();
  }
}

module.exports = ClubController;
