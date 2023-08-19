/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { ScrollRestoration } from 'react-router-dom';
import { ClubForm, ModalSavedClub, CrossClose } from '../components';
import { useHandleUpdateClub } from '../../hooks/useHandleUpdateClub';

function EditForm() {
  const { viewModal, upgradeClub } = useHandleUpdateClub();

  if (viewModal) {
    return (
      <ModalSavedClub
        exitRoute="/"
        title="Club updated"
        description="The club has been update succesfully"
      />
    );
  }

  return (
    <>
      <ScrollRestoration />
      <CrossClose exitRoute="/" />
      <ClubForm handleSaveClub={upgradeClub} />
    </>
  );
}

export { EditForm };
