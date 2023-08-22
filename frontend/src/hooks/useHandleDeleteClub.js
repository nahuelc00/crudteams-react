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
    });
  }

  return { removeClub, isRemoving };
}

export {
  useHandleDeleteClub,
};
