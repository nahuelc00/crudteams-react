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
    });
  }

  return { viewModal, saveClub, isSaving };
}

export {
  useHandleSaveClub,
};
