const { getPortAndHostname } = require('../../env');
const { buildClubForDB } = require('../utilities');

const { PORT, HOSTNAME } = getPortAndHostname();

describe('Utilities', () => {
  test('Should return a club builded with id for save a database', () => {
    const filenameMock = 'filenameOfImageMock';

    const clubMock = {
      id: 1000,
      name: 'Name mock',
      shortName: 'Shortname mock',
      tla: 'tla mock',
      nameArea: 'nameArea mock',
      idArea: 500,
      crestUrl: `http://${HOSTNAME}:${PORT}/files/${filenameMock}`,
      address: 'address mock',
      phone: '1234 mock',
      website: 'www.mockclub.com',
      email: 'mockclub@gmail.com',
      founded: 2000,
      clubColors: 'color mock',
      venue: 'Venue mock',
    };

    const clubForDB = buildClubForDB(clubMock, filenameMock);

    expect(clubForDB).toStrictEqual({
      id: 1000,
      name: clubMock.name,
      shortname: clubMock.shortName,
      tla: clubMock.tla,
      area_name: clubMock.nameArea,
      area_id: clubMock.idArea,
      crest_url: clubMock.crestUrl,
      address: clubMock.address,
      phone: clubMock.phone,
      website: clubMock.website,
      email: clubMock.email,
      founded: clubMock.founded,
      club_colors: clubMock.clubColors,
      venue: clubMock.venue,
    });
  });

  test('Should return a club builded without id for save a database', () => {
    const filenameMock = 'filenameOfImageMock';

    const clubMock = {
      name: 'Name mock',
      shortName: 'Shortname mock',
      tla: 'tla mock',
      nameArea: 'nameArea mock',
      idArea: 500,
      crestUrl: `http://${HOSTNAME}:${PORT}/files/${filenameMock}`,
      address: 'address mock',
      phone: '1234 mock',
      website: 'www.mockclub.com',
      email: 'mockclub@gmail.com',
      founded: 2000,
      clubColors: 'color mock',
      venue: 'Venue mock',
    };

    const clubForDB = buildClubForDB(clubMock, filenameMock);

    expect(clubForDB).toStrictEqual({
      id: undefined,
      name: clubMock.name,
      shortname: clubMock.shortName,
      tla: clubMock.tla,
      area_name: clubMock.nameArea,
      area_id: clubMock.idArea,
      crest_url: clubMock.crestUrl,
      address: clubMock.address,
      phone: clubMock.phone,
      website: clubMock.website,
      email: clubMock.email,
      founded: clubMock.founded,
      club_colors: clubMock.clubColors,
      venue: clubMock.venue,
    });
  });
});
