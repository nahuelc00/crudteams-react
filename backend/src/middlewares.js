const bodyParser = require('body-parser');
const cors = require('cors');

function ejecuteMiddlewares(app, express) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.static('clubsImages'));
}

module.exports = ejecuteMiddlewares;
