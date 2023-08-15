const { Sequelize } = require('sequelize');
const setupClubModel = require('../clubModel');

describe('Club model', () => {
  test('Should return a club model', () => {
    const sequelize = new Sequelize('sqlite::memory:');
    const ClubModel = setupClubModel(sequelize);
    expect(ClubModel).toEqual(sequelize.models.ClubModel);
  });
});
