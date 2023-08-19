/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import { ClubForm, ModalSavedClub, CrossClose } from '../components';

function EditForm() {
  const [viewModal, setViewModal] = useState(false);

  function handleSaveClub(clubId, formDataClub) {
    fetch(`http://localhost:8080/club/${clubId}`, {
      method: 'PUT',
      body: formDataClub,
    }).then(setViewModal(true));
  }

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
      <ClubForm handleSaveClub={handleSaveClub} />
    </>
  );
}

export { EditForm };
