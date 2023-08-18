import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getClub } from '../services/clubs';

function useGetClub() {
  const [club, setClub] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const clubId = Number(id);
    getClub(clubId).then((clubData) => {
      const newClub = { ...clubData };
      setClub(newClub);
      setIsLoading(false);
    })
      .catch((err) => {
        throw new Error('Fail at get club in hook', err);
      });
  }, [id, getClub]);

  return { club, isLoading };
}

export { useGetClub };
