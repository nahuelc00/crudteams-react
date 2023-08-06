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
    const clubs = this.clubRepository.getAll();
    clubs.push(newClub);

    this.clubRepository.save(clubs, newClub);
  }

  updateClub(clubToUpdate) {
    const clubs = this.clubRepository.getAll();

    for (let index = 0; index < clubs.length; index += 1) {
      const club = clubs[index];

      if (club.id === clubToUpdate.id) {
        clubs[index] = clubToUpdate;
      }
    }

    this.clubRepository.update(clubs, clubToUpdate);
  }

  deleteClub(id) {
    const clubs = this.clubRepository.getAll();
    let clubToDelete = {};

    for (let index = 0; index < clubs.length; index += 1) {
      const club = clubs[index];
      const isClubToRemove = club.id === id;

      if (isClubToRemove) {
        clubToDelete = { ...club };
        clubs.splice(index, 1);
      }
    }

    this.clubRepository.delete(clubs, clubToDelete);
  }
}

module.exports = ClubService;
