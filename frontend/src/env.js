function getMapsKey() {
  const MAPS_KEY = import.meta.env.VITE_MAPS_KEY;
  return MAPS_KEY;
}

export { getMapsKey };
