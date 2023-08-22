import { useState } from 'react';
import { sendClub } from '../services/clubs';

function useHandleSaveClub() {
  const [viewModal, setViewModal] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  function saveClub(clubFormData) {
    setIsSaving(true);
    sendClub(clubFormData).then(() => {
      setViewModal(true);
      setIsSaving(false);
    })
      .catch((err) => {
        throw new Error('Fail at save club in hook', err);
      });
  }

  return { viewModal, saveClub, isSaving };
}

export {
  useHandleSaveClub,
};
