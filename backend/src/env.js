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

function getSecretSession() {
  const { SECRET_SESSION } = process.env;

  return SECRET_SESSION;
}

module.exports = { getPortAndHostname, getDatabasePath, getSecretSession };
