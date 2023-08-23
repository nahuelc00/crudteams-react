/* eslint-disable react/jsx-no-bind */
import React from 'react';
import {
  ClubForm, ExitModal, CrossClose, Loader,
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
      <ExitModal
        exitRoute="/"
        title="Club updated"
        description="The club has been succesfully updated"
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
