/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader, ModalDeleteClub, ExitModal } from '../components';
import { useHandleDeleteClub } from '../../hooks/useHandleDeleteClub';

function Delete() {
  const { id } = useParams();

  const { removeClub, isRemoving, viewModal } = useHandleDeleteClub({ id });

  const navigate = useNavigate();

  function handleCloseModal() {
    navigate('/');
  }

  function handleConfirmationModal() {
    removeClub();
  }

  if (viewModal) {
    return (
      <ExitModal
        exitRoute="/"
        title="Club deleted"
        description="The club has been succesfully deleted"
      />
    );
  }

  if (isRemoving) {
    return <Loader />;
  }

  return (
    <ModalDeleteClub
      handleCloseModal={handleCloseModal}
      handleConfirmationModal={handleConfirmationModal}
    />
  );
}

export { Delete };
