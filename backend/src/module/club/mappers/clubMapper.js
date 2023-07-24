const Club = require('../entities/club');

function mapClub(club) {
  const newClub = new Club(club);

  const clubMapped = {
    id: newClub.id,
    nameArea: newClub.area.name,
    idArea: newClub.area.id,
    name: newClub.name,
    shortName: newClub.shortName,
    tla: newClub.tla,
    crestUrl: newClub.crestUrl,
    address: newClub.address,
    phone: newClub.phone || '----',
    website: newClub.website,
    email: newClub.email || '----',
    founded: newClub.founded,
    clubColors: newClub.clubColors,
    venue: newClub.venue,
    lastUpdated: newClub.lastUpdated || '',
  };

  return clubMapped;
}

module.exports = mapClub;
