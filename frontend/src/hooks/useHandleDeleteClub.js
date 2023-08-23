import { useState } from 'react';
import { deleteClub } from '../services/clubs';

function useHandleDeleteClub({ id }) {
  const [isRemoving, setIsRemoving] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  function removeClub() {
    setIsRemoving(true);
    deleteClub(id).then(() => {
      setIsRemoving(false);
      setViewModal(true);
    })
      .catch((err) => {
        throw new Error('Fail at delete club in hook', err);
      });
  }

  return { removeClub, isRemoving, viewModal };
}

export {
  useHandleDeleteClub,
};
