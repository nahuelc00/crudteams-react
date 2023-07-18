import { useEffect, useState } from 'react';
import { getClub } from '../services/clubs';
import { getClubIdFromPath } from '../utilities/utilities';

function useSetClub() {
  const [club, setClub] = useState({});

  useEffect(() => {
    const clubId = getClubIdFromPath();
    getClub(clubId).then((clubData) => {
      const newClub = { ...clubData };
      setClub(newClub);
    });
  }, []);

  return { club };
}

export { useSetClub };
