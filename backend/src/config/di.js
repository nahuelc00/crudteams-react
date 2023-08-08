const {
  default: DIContainer, object, use,
} = require('rsdi');
const multer = require('multer');
const db = require('better-sqlite3');

const { getDatabasePath } = require('../env');
const { ClubController, ClubService, ClubRepository } = require('../module/club');

const PATH_CLUBS_DB = getDatabasePath();

const upload = multer({ dest: 'clubsImages/files' });

function configureDI() {
  const container = new DIContainer();

  container.add({
    ClubRepository: object(ClubRepository).construct(db(PATH_CLUBS_DB)),
    ClubService: object(ClubService).construct(use(ClubRepository)),
    ClubController: object(ClubController).construct(use(ClubService), upload),
  });

  return container;
}

module.exports = configureDI;
