function getPortAndHostname() {
  const PORT = process.env.PORT || 8080;
  const HOSTNAME = process.env.HOSTNAME || 'localhost';

  return {
    PORT,
    HOSTNAME,
  };
}

function getDatabasePath() {
  const { PATH_TEAMS_DB, PATH_TEAM_DB } = process.env;

  return {
    PATH_TEAMS_DB,
    PATH_TEAM_DB,
  };
}

module.exports = { getPortAndHostname, getDatabasePath };
