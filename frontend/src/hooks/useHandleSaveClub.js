import { useState } from 'react';
import { sendClub } from '../services/clubs';

function useHandleSaveClub() {
  const [viewModal, setViewModal] = useState(false);

  function saveClub(clubFormData) {
    sendClub(clubFormData).then(() => {
      setViewModal(true);
    });
  }

  return { viewModal, saveClub };
}

export {
  useHandleSaveClub,
};
