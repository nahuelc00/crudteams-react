import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getClub } from '../services/clubs';

function useGetClub() {
  const [club, setClub] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const clubId = Number(id);
    getClub(clubId).then((clubData) => {
      const newClub = { ...clubData };
      setClub(newClub);
    });
  }, []);

  return { club };
}

export { useGetClub };
