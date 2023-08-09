const {
  default: DIContainer, object, use, factory,
} = require('rsdi');
const session = require('express-session');
const multer = require('multer');
const db = require('better-sqlite3');

const { getDatabasePath, getSecretSession } = require('../env');
const { ClubController, ClubService, ClubRepository } = require('../module/club');

const PATH_CLUBS_DB = getDatabasePath();

const upload = multer({ dest: 'clubsImages/files' });

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

function configureDI() {
  const container = new DIContainer();

  container.add({
    Session: factory(configureSession),
    ClubRepository: object(ClubRepository).construct(db(PATH_CLUBS_DB)),
    ClubService: object(ClubService).construct(use(ClubRepository)),
    ClubController: object(ClubController).construct(use(ClubService), upload),
  });

  return container;
}

module.exports = configureDI;
