const { getPortAndHostname } = require('../env');

const { PORT, HOSTNAME } = getPortAndHostname();

function buildClubForDB(club, imgFilename, id) {
  return {
    id,
    name: club.name,
    shortname: club.shortName,
    tla: club.tla,
    area_name: club.nameArea,
    area_id: Number(club.idArea),
    crest_url: `http://${HOSTNAME}:${PORT}/files/${imgFilename}`,
    address: club.address,
    phone: club.phone,
    website: club.website,
    email: club.email,
    founded: Number(club.founded),
    club_colors: club.clubColors,
    venue: club.venue,
  };
}

module.exports = { buildClubForDB };
