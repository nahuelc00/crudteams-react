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

function getEnvironment() {
  const { NODE_ENV } = process.env;
  return NODE_ENV;
}

function getProductionURL() {
  const { PRODUCTION_URL } = process.env;
  return PRODUCTION_URL;
}

module.exports = {
  getPortAndHostname, getDatabasePath, getSecretSession, getEnvironment, getProductionURL,
};
