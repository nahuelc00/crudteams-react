require('dotenv').config();

const express = require('express');
const configureDI = require('./config/di');
const ejecuteMiddlewares = require('./middlewares');
const { getPortAndHostname } = require('./env');

const app = express();

const { PORT, HOSTNAME } = getPortAndHostname();

ejecuteMiddlewares(app, express);

(function main() {
  const container = configureDI();

  const clubController = container.get('ClubController');

  clubController.setupRoutes(app);

  app.listen(PORT, HOSTNAME, () => {
    console.log(`Listen port in ${HOSTNAME}:${PORT} `);
  });
}());
