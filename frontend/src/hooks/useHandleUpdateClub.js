import { useState } from 'react';
import { updateClub } from '../services/clubs';

function useHandleUpdateClub() {
  const [viewModal, setViewModal] = useState(false);

  function upgradeClub(id, clubFormData) {
    updateClub(id, clubFormData).then(() => {
      setViewModal(true);
    });
  }

  return { viewModal, upgradeClub };
}

export {
  useHandleUpdateClub,
};
