import { convertUTCtoLocalTime, handleErrorInShieldImg } from '../utilities';

describe('Utilities', () => {
  test('Should assign error image in src attribute', () => {
    const eventMock = { target: { src: '' } };

    handleErrorInShieldImg(eventMock);

    expect(eventMock.target.src).toBe('/not-shield.png');
  });

  test('Should convert utc date in local date time', () => {
    const utcDate = '2023-08-15T02:01:34.148Z';
    const localDateTime = convertUTCtoLocalTime(utcDate);
    expect(localDateTime).toBe('2023-08-15 23:01:34');
  });
});
