class ClubService {
  constructor(clubRepository) {
    this.clubRepository = clubRepository;
  }

  getClubs() {
    return this.clubRepository.getAll();
  }

  getClub(id) {
    return this.clubRepository.getById(id);
  }

  saveClub(newClub) {
    const clubs = this.getClubs();
    clubs.push(newClub);

    this.clubRepository.save(clubs, newClub);
  }

  updateClub(clubToUpdate) {
    const clubs = this.getClubs();

    for (let index = 0; index < clubs.length; index += 1) {
      const club = clubs[index];

      if (club.id === clubToUpdate.id) {
        clubs[index] = clubToUpdate;
      }
    }

    this.clubRepository.update(clubs, clubToUpdate);
  }

  deleteClub(id) {
    const clubs = this.getClubs();
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
