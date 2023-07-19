/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ModalDeleteClub } from '../components';
import { deleteClub } from '../../services/clubs';

function Delete() {
  const navigate = useNavigate();
  const { id } = useParams();

  function handleCloseModal() {
    navigate('/');
  }

  function handleConfirmationModal() {
    deleteClub(id).then(() => {
      navigate('/');
    });
  }
  return (
    <ModalDeleteClub
      handleCloseModal={handleCloseModal}
      handleConfirmationModal={handleConfirmationModal}
    />
  );
}

export { Delete };
