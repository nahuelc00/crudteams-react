const {
  default: DIContainer, object, use,
} = require('rsdi');
const fs = require('fs');
const multer = require('multer');

const { ClubController, ClubService, ClubRepository } = require('../module/club');
const { getDatabasePath } = require('../env');

const { PATH_TEAMS_DB, PATH_TEAM_DB } = getDatabasePath();

const upload = multer({ dest: 'clubsImages/files' });

function configureDI() {
  const container = new DIContainer();

  container.add({
    ClubRepository: object(ClubRepository).construct(fs, PATH_TEAMS_DB, PATH_TEAM_DB),
    ClubService: object(ClubService).construct(use(ClubRepository)),
    ClubController: object(ClubController).construct(use(ClubService), upload),
  });

  return container;
}

module.exports = configureDI;
