/* eslint-disable react/jsx-no-bind */
import React, { useState } from 'react';
import { ClubForm, ModalSavedClub, CrossClose } from '../components';

function EditForm() {
  const [viewModal, setViewModal] = useState(false);

  function handleSaveClub(clubId, formDataClub) {
    fetch(`http://localhost:8080/club/${clubId}`, {
      method: 'PUT',
      body: formDataClub,
    }).then(setViewModal(true));
  }

  return viewModal ? (
    <ModalSavedClub
      exitRoute="/"
      title="Club updated"
      description="The club has been update succesfully"
    />
  )
    : (
      <>
        <CrossClose exitRoute="/" />
        <ClubForm handleSaveClub={handleSaveClub} />
      </>
    );
}

export { EditForm };
