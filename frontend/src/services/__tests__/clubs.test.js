import {
  deleteClub, sendClub, getClub, getClubs,
} from '../clubs';

describe('Service', () => {
  test('Should return a collection', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([{ id: 1 }, { id: 2 }]),
    }));

    const clubs = await getClubs();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(clubs.length).toBeGreaterThanOrEqual(1);
    expect(clubs[0]).toHaveProperty('id');
  });

  test('Should return a object', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({ id: 1 }),
    }));

    const club = await getClub(1);

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(club.length).toBeUndefined();
    expect(club).toHaveProperty('id');
  });

  test('Should call to fetch for save', async () => {
    global.fetch = jest.fn();

    await sendClub();

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test('Should call to fetch for save', async () => {
    global.fetch = jest.fn();

    await deleteClub();

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
