/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader, ModalDeleteClub } from '../components';
import { useHandleDeleteClub } from '../../hooks/useHandleDeleteClub';

function Delete() {
  const { id } = useParams();

  const { removeClub, isRemoving } = useHandleDeleteClub({ id });

  const navigate = useNavigate();

  function handleCloseModal() {
    navigate('/');
  }

  function handleConfirmationModal() {
    removeClub();
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
