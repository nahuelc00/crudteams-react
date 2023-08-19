import {
  deleteClub, sendClub, updateClub, getClub, getClubs,
} from '../clubs';

describe('Service', () => {
  test('Should call to fetch for get clubs and return a collection that represent clubs', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve([{ id: 1 }, { id: 2 }]),
    }));

    const clubs = await getClubs();

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(clubs.length).toBeGreaterThanOrEqual(1);
    expect(clubs[0]).toHaveProperty('id');
  });

  test('Should call to fetch for get a club and return a object that represent a club', async () => {
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

  test('Should call to fetch for delete', async () => {
    global.fetch = jest.fn();

    await deleteClub();

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });

  test('Should call to fetch for update', async () => {
    global.fetch = jest.fn();

    await updateClub();

    expect(global.fetch).toHaveBeenCalledTimes(1);
  });
});
