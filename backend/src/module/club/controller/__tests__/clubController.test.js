const ClubController = require('../clubController');

const serviceMock = {
  getClubs: jest.fn(() => [{}, {}]),
  getClub: jest.fn(() => ({})),
  saveClub: jest.fn(),
  updateClub: jest.fn(),
  deleteClub: jest.fn(),
};

const controller = new ClubController(serviceMock, {});

describe('Club controller', () => {
  test('Should ejecute getClubs of service mock ', async () => {
    const responseMock = { send: () => { } };

    await controller.getClubs(responseMock);

    expect(serviceMock.getClubs).toHaveBeenCalledTimes(1);
  });

  test('Should ejecute getClub of service mock ', async () => {
    const responseMock = { send: () => { } };
    const requestMock = { params: { id: 2222 } };

    await controller.getClub(requestMock, responseMock);

    expect(serviceMock.getClub).toHaveBeenCalledTimes(1);
  });

  test('Should ejecute saveClub of service mock', async () => {
    const responseMock = { send: () => { } };
    const requestMock = {
      body: { },
      file: { },
    };

    await controller.saveClub(requestMock, responseMock);

    expect(serviceMock.saveClub).toHaveBeenCalledTimes(1);
  });

  test('Should ejecute updateClub of service mock', async () => {
    const responseMock = { send: () => { } };
    const requestMock = {
      params: { },
      file: { },
    };

    await controller.updateClub(requestMock, responseMock);

    expect(serviceMock.updateClub).toHaveBeenCalledTimes(1);
  });

  test('Should ejecute deleteClub of service mock', async () => {
    const responseMock = { end: () => { } };
    const requestMock = {
      params: { },
    };

    await controller.deleteClub(requestMock, responseMock);

    expect(serviceMock.deleteClub).toHaveBeenCalledTimes(1);
  });
});
