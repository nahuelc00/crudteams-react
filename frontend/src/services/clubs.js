function getClubs() {
  return fetch('http://localhost:8080/clubs')
    .then((res) => res.json())
    .then((clubs) => clubs);
}

function getClub(id) {
  return fetch(`http://localhost:8080/club/${id}`).then((data) => data.json())
    .then((club) => club);
}

function sendClub(clubFormData) {
  return fetch('http://localhost:8080/clubs', {
    method: 'POST',
    body: clubFormData,
  });
}

export { getClubs, getClub, sendClub };
