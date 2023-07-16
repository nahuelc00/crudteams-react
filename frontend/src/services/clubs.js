function getClubs() {
  return fetch('http://localhost:8080/clubs')
    .then((res) => res.json())
    .then((clubs) => clubs);
}

export { getClubs };
