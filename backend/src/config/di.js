const {
  default: DIContainer, object, use, factory,
} = require('rsdi');
const { Sequelize } = require('sequelize');
const session = require('express-session');
const multer = require('multer');

const { getDatabasePath, getSecretSession } = require('../env');
const { ClubController, ClubService, ClubRepository } = require('../module/club');
const setupClubModel = require('../module/club/model/clubModel');

const PATH_CLUBS_DB = getDatabasePath();

const upload = multer({ dest: 'clubs-images/files' });

function configureSession() {
  const FIVE_DAYS_IN_SECONDS = 432000;

  const sessionConfig = {
    secret: getSecretSession(),
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: FIVE_DAYS_IN_SECONDS },
  };

  return session(sessionConfig);
}

function configurateSequelize() {
  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: PATH_CLUBS_DB, // Change this for environment variables
    logging: console.log,
  });

  return sequelize;
}

function initClubModel() {
  const sequelize = configurateSequelize();
  const ClubModel = setupClubModel(sequelize);
  ClubModel.sync();
  return ClubModel;
}

function configureDI() {
  const container = new DIContainer();

  container.add({
    Session: factory(configureSession),
    ClubRepository: object(ClubRepository).construct(factory(initClubModel)),
    ClubService: object(ClubService).construct(use(ClubRepository)),
    ClubController: object(ClubController).construct(use(ClubService), upload),
  });

  return container;
}

module.exports = configureDI;
