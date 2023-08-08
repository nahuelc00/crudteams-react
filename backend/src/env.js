function getPortAndHostname() {
  const PORT = process.env.PORT || 8080;
  const HOSTNAME = process.env.HOSTNAME || 'localhost';

  return {
    PORT,
    HOSTNAME,
  };
}

function getDatabasePath() {
  const { PATH_CLUBS_DB } = process.env;

  return PATH_CLUBS_DB;
}

module.exports = { getPortAndHostname, getDatabasePath };
