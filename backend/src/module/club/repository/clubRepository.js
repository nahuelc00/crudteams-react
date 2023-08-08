const { getLocalDatetime } = require('../../../utilities/utilities');
const Club = require('../entity/club');

class ClubRepository {
  constructor(db) {
    this.db = db;
  }

  getAll() {
    const clubs = this.db.prepare('SELECT * FROM clubs').all();
    const clubsEntities = clubs.map((club) => new Club(club));
    return clubsEntities;
  }

  getById(id) {
    const club = this.db.prepare('SELECT * FROM clubs WHERE id = ?').get(id);
    const clubEntity = new Club(club);
    return clubEntity;
  }

  save(newClub) {
    const saveClub = this.db.prepare(`INSERT INTO clubs (
      name,
      shortname,
      tla,
      area_name,
      area_id,
      crest_url,
      address,
      phone,
      website,
      email,
      founded,
      club_colors,
      venue,
      created_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`);

    saveClub.run(
      newClub.name,
      newClub.shortname,
      newClub.tla,
      newClub.area_name,
      newClub.area_id,
      newClub.crest_url,
      newClub.address,
      newClub.phone,
      newClub.website,
      newClub.email,
      newClub.founded,
      newClub.club_colors,
      newClub.venue,
      getLocalDatetime(),
    );
  }

  update(clubToUpdate) {
    const updateClub = this.db.prepare(`UPDATE clubs SET name = ?, shortname = ?, tla = ?, area_name = ?, area_id = ?,
    crest_url = ?, address = ?, phone = ?, website = ?, email = ?, founded = ?, club_colors = ?,
    venue = ?, updated_at = ? WHERE id = ?`);

    updateClub.run(
      clubToUpdate.name,
      clubToUpdate.shortname,
      clubToUpdate.tla,
      clubToUpdate.area_name,
      clubToUpdate.area_id,
      clubToUpdate.crest_url,
      clubToUpdate.address,
      clubToUpdate.phone,
      clubToUpdate.website,
      clubToUpdate.email,
      clubToUpdate.founded,
      clubToUpdate.club_colors,
      clubToUpdate.venue,
      getLocalDatetime(),
      clubToUpdate.id,
    );
  }

  delete(clubIdToDelete) {
    const deleteClub = this.db.prepare(`DELETE FROM clubs WHERE id = ${clubIdToDelete}`);
    deleteClub.run();
  }
}

module.exports = ClubRepository;
