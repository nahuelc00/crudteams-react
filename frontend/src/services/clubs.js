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

function deleteClub(clubId) {
  return fetch(`http://localhost:8080/club/${clubId}`, {
    method: 'delete',
  });
}

export { getClubs, getClub, sendClub };
