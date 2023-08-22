import { useState } from 'react';
import { updateClub } from '../services/clubs';

function useHandleUpdateClub() {
  const [viewModal, setViewModal] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  function upgradeClub(id, clubFormData) {
    setIsUpdating(true);
    updateClub(id, clubFormData).then(() => {
      setIsUpdating(false);
      setViewModal(true);
    })
      .catch((err) => {
        throw new Error('Fail at update club in hook', err);
      });
  }

  return { viewModal, upgradeClub, isUpdating };
}

export {
  useHandleUpdateClub,
};
