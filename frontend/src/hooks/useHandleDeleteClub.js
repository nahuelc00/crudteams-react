import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { deleteClub } from '../services/clubs';

function useHandleDeleteClub({ id }) {
  const [isRemoving, setIsRemoving] = useState(false);
  const navigate = useNavigate();

  function removeClub() {
    setIsRemoving(true);
    deleteClub(id).then(() => {
      setIsRemoving(false);
      navigate('/');
    })
      .catch((err) => {
        throw new Error('Fail at delete club in hook', err);
      });
  }

  return { removeClub, isRemoving };
}

export {
  useHandleDeleteClub,
};
