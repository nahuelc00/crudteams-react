/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import { ClubForm, ModalSavedClub, CrossClose } from '../components';
import { sendClub } from '../../services/clubs';

function Form() {
  const [viewModal, setViewModal] = useState(false);

  function handleSaveClub(id, clubFormData) {
    sendClub(clubFormData).then(setViewModal(true));
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
      <ClubForm handleSaveClub={handleSaveClub} />
    </>
  );

  /*
  return (
    viewModal ? (
      <ModalSavedClub
        exitRoute="/"
        title="Club saved"
        description="The club has been saved succesfully"
      />
    )
      : (
        <>
          <CrossClose exitRoute="/" />
          <ClubForm handleSaveClub={handleSaveClub} />
        </>
      )
  );
  */
}

export { Form };
