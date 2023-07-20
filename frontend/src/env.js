function getGoogleMapsKey() {
  const GOOGLE_MAPS_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;
  return GOOGLE_MAPS_KEY;
}

function getHostApi() {
  const API_HOST = import.meta.env.VITE_API_HOST;
  return API_HOST;
}

export { getGoogleMapsKey, getHostApi };
