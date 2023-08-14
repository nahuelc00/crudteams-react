const mapClub = require('../mapper/clubMapper');

class ClubService {
  constructor(clubRepository) {
    this.clubRepository = clubRepository;
  }

  async getClubs() {
    const clubs = await this.clubRepository.getAll();
    const clubsMapped = clubs.map((club) => mapClub(club));
    return clubsMapped;
  }

  async getClub(id) {
    const club = await this.clubRepository.getById(id);
    const clubMapped = mapClub(club);
    return clubMapped;
  }

  async saveClub(newClub) {
    await this.clubRepository.save(newClub);
  }

  async updateClub(clubToUpdate) {
    await this.clubRepository.update(clubToUpdate);
  }

  async deleteClub(id) {
    await this.clubRepository.delete(id);
  }
}

module.exports = ClubService;
