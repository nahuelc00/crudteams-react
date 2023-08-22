/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  ClubForm, ModalSavedClub, CrossClose, Loader,
} from '../components';
import { useHandleSaveClub } from '../../hooks/useHandleSaveClub';

function Form() {
  const { viewModal, saveClub, isSaving } = useHandleSaveClub();

  if (isSaving) {
    return <Loader />;
  }

  if (viewModal) {
    return (
      <ModalSavedClub
        exitRoute="/"
        title="Club saved"
        description="The club has been saved succesfully"
      />
    );
  }

  return (
    <>
      <CrossClose exitRoute="/" />
      <ClubForm handleSaveClub={saveClub} />
    </>
  );
}

export { Form };
