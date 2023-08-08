const mapClub = require('../mapper/clubMapper');

class ClubService {
  constructor(clubRepository) {
    this.clubRepository = clubRepository;
  }

  getClubs() {
    const clubs = this.clubRepository.getAll();
    const clubsMapped = clubs.map((club) => mapClub(club));
    return clubsMapped;
  }

  getClub(id) {
    const club = this.clubRepository.getById(id);
    const clubMapped = mapClub(club);
    return clubMapped;
  }

  saveClub(newClub) {
    this.clubRepository.save(newClub);
  }

  updateClub(clubToUpdate) {
    this.clubRepository.update(clubToUpdate);
  }

  deleteClub(id) {
    this.clubRepository.delete(id);
  }
}

module.exports = ClubService;
