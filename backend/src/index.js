require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const configureDI = require('./config/di');
const { getPortAndHostname } = require('../env');

const { PORT, HOSTNAME } = getPortAndHostname();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('clubs-images'));

(function main() {
  const container = configureDI();
  const session = container.get('Session');

  app.use(session);

  const clubController = container.get('ClubController');

  clubController.setupRoutes(app);

  app.listen(PORT, HOSTNAME, () => {
    console.log(`Listen port in ${HOSTNAME}:${PORT} `);
  });
}());
