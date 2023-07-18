function handleErrorInShieldImg(event) {
  // eslint-disable-next-line no-param-reassign
  event.target.src = '../images/not-shield.png';
}

function getClubIdFromPath() {
  const pathData = window.location.pathname.split('/');
  const clubId = Number(pathData[pathData.length - 1]);
  return clubId;
}

export { handleErrorInShieldImg, getClubIdFromPath };
