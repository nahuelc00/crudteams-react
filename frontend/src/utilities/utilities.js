function handleErrorInShieldImg(event) {
  // eslint-disable-next-line no-param-reassign
  event.target.src = '/not-shield.png';
}

function convertUTCtoLocalTime(utc) {
  const date = new Date(utc).toISOString().split('T')[0];
  const time = new Date(utc).toTimeString().split(' ')[0];
  return `${date} ${time}`;
}

export { handleErrorInShieldImg, convertUTCtoLocalTime };
