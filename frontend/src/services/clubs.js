import { getHostApi } from '../../env';

const HOST_API = getHostApi() || 'localhost:8080';

function getClubs() {
  return fetch(`http://${HOST_API}/clubs`)
    .then((res) => res.json())
    .then((clubs) => clubs);
}

function getClub(id) {
  return fetch(`http://${HOST_API}/club/${id}`).then((data) => data.json())
    .then((club) => club);
}

function sendClub(clubFormData) {
  return fetch(`http://${HOST_API}/clubs`, {
    method: 'POST',
    body: clubFormData,
  });
}

function updateClub(id, clubFormData) {
  return fetch(`http://localhost:8080/club/${id}`, {
    method: 'PUT',
    body: clubFormData,
  });
}

function deleteClub(clubId) {
  return fetch(`http://${HOST_API}/club/${clubId}`, {
    method: 'delete',
  });
}

export {
  getClubs, getClub, sendClub, deleteClub, updateClub,
};
