/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  ClubForm, ModalSavedClub, CrossClose, Loader,
} from '../components';
import { useHandleUpdateClub } from '../../hooks/useHandleUpdateClub';
import { useScrollToTop } from '../../hooks/useScrollToTop';

function EditForm() {
  const { viewModal, upgradeClub, isUpdating } = useHandleUpdateClub();

  useScrollToTop();

  if (isUpdating) {
    return <Loader />;
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
      <CrossClose exitRoute="/" />
      <ClubForm handleSaveClub={upgradeClub} />
    </>
  );
}

export { EditForm };
