const Club = require('../entity/club');

class ClubRepository {
  constructor(clubModel) {
    this.clubModel = clubModel;
  }

  async getAll() {
    const clubs = (await this.clubModel.findAll()).map((club) => club.toJSON());
    const clubsEntities = clubs.map((club) => new Club(club));
    return clubsEntities;
  }

  async getById(id) {
    const club = await this.clubModel.findByPk(id);
    const clubEntity = new Club(club);
    return clubEntity;
  }

  async save(newClub) {
    const clubToSave = this.clubModel.build({
      name: newClub.name,
      shortname: newClub.shortname,
      tla: newClub.tla,
      area_name: newClub.area_name,
      area_id: newClub.area_id,
      crest_url: newClub.crest_url,
      address: newClub.address,
      phone: newClub.phone,
      website: newClub.website,
      email: newClub.email,
      founded: newClub.founded,
      club_colors: newClub.club_colors,
      venue: newClub.venue,
    });

    await clubToSave.save();
  }

  async update(clubToUpdate) {
    const club = await this.clubModel.findByPk(clubToUpdate.id);

    club.name = clubToUpdate.name;
    club.shortname = clubToUpdate.shortname;
    club.tla = clubToUpdate.tla;
    club.area_name = clubToUpdate.area_name;
    club.area_id = clubToUpdate.area_id;
    club.crest_url = clubToUpdate.crest_url;
    club.address = clubToUpdate.address;
    club.phone = clubToUpdate.phone;
    club.website = clubToUpdate.website;
    club.email = clubToUpdate.email;
    club.founded = clubToUpdate.founded;
    club.club_colors = clubToUpdate.club_colors;
    club.venue = clubToUpdate.venue;

    club.save();
  }

  async delete(clubIdToDelete) {
    const clubToDelete = await this.clubModel.findByPk(clubIdToDelete);
    await clubToDelete.destroy();
  }
}

module.exports = ClubRepository;
