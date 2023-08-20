/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
const { getPortAndHostname, getEnvironment, getProductionURL } = require('../../env');

function buildCrestURL(imgFilename) {
  const environment = getEnvironment();

  if (environment === 'development') {
    const crestUrl = `http://${HOSTNAME}:${PORT}/files/${imgFilename}`;

    return crestUrl;
  }
  if (environment === 'production') {
    const productionUrl = getProductionURL();
    const crestUrl = `https://${productionUrl}/files/${imgFilename}`;
    return crestUrl;
  }
}

const { PORT, HOSTNAME } = getPortAndHostname();

function buildClubForDB(club, imgFilename) {
  const crestUrl = buildCrestURL(imgFilename);
  return {
    id: club.id,
    name: club.name,
    shortname: club.shortName,
    tla: club.tla,
    area_name: club.nameArea,
    area_id: Number(club.idArea),
    crest_url: crestUrl,
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
