const Club = require('../club');

describe('Club entity', () => {
  test('Should create entity club', () => {
    const clubMock = {
      id: 1000,
      name: 'Manchester United FC',
      shortname: 'Man United',
      tla: 'MUN',
      area_name: 'England',
      area_id: 2072,
      crest_url: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg',
      address: 'Sir Matt Busby Way Manchester M16 0RA',
      phone: '+44 (0161) 8688000',
      website: 'http://www.manutd.com',
      email: 'enquiries@manutd.co.uk',
      founded: 1878,
      club_colors: 'Red / White',
      venue: 'Old Trafford',
      created_at: 'today',
    };

    const clubMockEntity = new Club(clubMock);

    expect(clubMock).toEqual(clubMockEntity);
  });
});
