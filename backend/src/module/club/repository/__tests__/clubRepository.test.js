const { Sequelize } = require('sequelize');
const ClubRepository = require('../clubRepository');
const setupClubModel = require('../../model/clubModel');
const Club = require('../../entity/club');

const sequelize = new Sequelize('sqlite::memory:');
const ClubModel = setupClubModel(sequelize);
const repository = new ClubRepository(ClubModel);

const clubMock = ClubModel.build({
  name: 'Arsenal FC',
  shortname: 'Arsenal',
  tla: 'ARS',
  area_name: 'England',
  area_id: 'England',
  crest_url: 'https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
  address: '75 Drayton Park London N5 1BU',
  phone: '+44 (020) 76195003',
  website: 'http://www.arsenal.com',
  email: 'info@arsenal.co.uk',
  founded: 1886,
  club_colors: 'Red / White',
  venue: 'Emirates Stadium',
});

const clubMock2 = ClubModel.build({
  name: 'Chelsea FC',
  shortname: 'Chelsea',
  tla: 'CHE',
  area_name: 'England',
  area_id: 2072,
  crest_url: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg',
  address: 'Fulham Road London SW6 1HS',
  phone: '+44 (0871) 9841955',
  website: 'http://www.chelseafc.com',
  email: null,
  founded: 1905,
  club_colors: 'Royal Blue / White',
  venue: 'Stamford Bridge',
});

describe('Club Repository', () => {
  beforeAll(async () => {
    await ClubModel.sync();
    await clubMock.save();
    await clubMock2.save();
  });

  test('Should return all clubs entities', async () => {
    const clubs = await repository.getAll();

    expect(clubs[0]).toStrictEqual(new Club(clubMock));
    expect(clubs[1]).toStrictEqual(new Club(clubMock2));
  });

  test('Should return one club entity', async () => {
    const club = await repository.getById(1);
    expect(club).toStrictEqual(new Club(clubMock));
  });

  test('Should save a club', async () => {
    const clubToSaveMock = {
      name: 'Manchester City FC',
      shortname: 'Man City',
      tla: 'MCI',
      area_name: 'England',
      area_id: 2072,
      crest_url: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg',
      address: 'SportCity Manchester M11 3FF',
      phone: '+44 (0870) 0621894',
      website: 'https://www.mancity.com',
      email: 'mancity@mancity.com',
      founded: 1880,
      club_colors: 'Sky Blue / White',
      venue: 'Etihad Stadium',
    };

    await repository.save(clubToSaveMock);
    const savedClub = await repository.getById(3);

    expect(savedClub).toBeTruthy();
  });

  test('Should update club', async () => {
    const clubToUpdate = await repository.getById(3);
    clubToUpdate.name = 'Club updated';

    await repository.update(clubToUpdate);
    const clubUpdated = await repository.getById(3);

    expect(clubUpdated.name).toBe('Club updated');
  });

  test('Should delete club', async () => {
    const clubToDelete = await repository.getById(3);

    await repository.delete(clubToDelete.id);

    const clubs = await repository.getAll();

    expect(clubs.length).toBe(2);
  });
});
