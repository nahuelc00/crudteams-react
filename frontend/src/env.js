function getMapsKey() {
  const MAPS_KEY = import.meta.env.VITE_MAPS_KEY;
  return MAPS_KEY;
}

function getHostApi() {
  const API_HOST = import.meta.env.VITE_API_HOST;
  return API_HOST;
}

export { getMapsKey, getHostApi };
