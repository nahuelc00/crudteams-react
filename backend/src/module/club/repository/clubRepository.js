/* eslint-disable no-shadow */

const Club = require('../entity/club');

// Should return pure entity

class ClubRepository {
  constructor(fs, PATH_TEAMS_DB, PATH_TEAM_DB) {
    this.fs = fs;
    this.PATH_TEAMS_DB = PATH_TEAMS_DB;
    this.PATH_TEAM_DB = PATH_TEAM_DB;
  }

  getAll() {
    const clubs = JSON.parse(this.fs.readFileSync(this.PATH_TEAMS_DB));
    const clubsEntities = clubs.map((club) => new Club(club));
    return clubsEntities;
  }

  getById(id) {
    const clubs = this.getAll();
    const club = clubs.find((club) => club.id === id);
    return club;
  }

  save(clubs, newClub) {
    this.fs.writeFileSync(this.PATH_TEAMS_DB, JSON.stringify(clubs));
    this.fs.writeFileSync(`${this.PATH_TEAM_DB}/${newClub.tla}.json`, JSON.stringify(newClub));
  }

  update(clubs, clubToUpdate) {
    this.fs.writeFileSync(this.PATH_TEAMS_DB, JSON.stringify(clubs));
    this.fs.writeFileSync(`${this.PATH_TEAM_DB}/${clubToUpdate.tla}.json`, JSON.stringify(clubToUpdate));
  }

  delete(clubs, clubToDelete) {
    this.fs.unlinkSync(`${this.PATH_TEAM_DB}/${clubToDelete.tla}.json`);
    this.fs.writeFileSync(this.PATH_TEAMS_DB, JSON.stringify(clubs));
  }
}

module.exports = ClubRepository;
