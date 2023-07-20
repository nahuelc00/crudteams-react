import { useState, useEffect } from 'react';
import { getClubs } from '../services/clubs';

function useFetchClubs() {
  const [clubs, setClubs] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      getClubs().then((clubs) => {
        setClubs(clubs);
        setisLoading(false);
      });
    }, 500);
  }, []);

  return { clubs, isLoading };
}

export { useFetchClubs };
