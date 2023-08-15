const ClubService = require('../clubService');

const repositoryMock = {
  getAll: jest.fn(() => [{}, {}]),
  getById: jest.fn(() => ({})),
  save: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};
const service = new ClubService(repositoryMock);

describe('Club service', () => {
  test('Should ejecute getAll of repository mock', async () => {
    await service.getClubs();

    expect(repositoryMock.getAll).toHaveBeenCalledTimes(1);
  });

  test('Should ejecute getById of repository mock', async () => {
    await service.getClub(1);

    expect(repositoryMock.getById).toHaveBeenCalledTimes(1);
  });

  test('Should ejecute save of repository mock', async () => {
    await service.saveClub({});

    expect(repositoryMock.save).toHaveBeenCalledTimes(1);
  });

  test('Should ejecute update of repository mock', async () => {
    await service.updateClub({});

    expect(repositoryMock.update).toHaveBeenCalledTimes(1);
  });

  test('Should ejecute delete of repository mock', async () => {
    await service.deleteClub(1);

    expect(repositoryMock.delete).toHaveBeenCalledTimes(1);
  });
});
