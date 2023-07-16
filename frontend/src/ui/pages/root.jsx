import React from 'react';
import {
  ClubsCounter, AddClub, ClubsGrid, Loader,
} from '../components';
import { useFetchClubs } from '../../hooks/useFetchClubs';

function Root() {
  const { clubs, isLoading } = useFetchClubs();

  return (
    <>
      <h1 className="m-0 mb-5 text-center">Clubs App</h1>

      { isLoading
        ? <Loader />
        : (
          <>
            <div className="d-flex align-items-center mb-5">
              <ClubsCounter clubsQuantity={clubs.length} />
              <AddClub />
            </div>
            <ClubsGrid clubs={clubs} />
          </>
        )}
    </>
  );
}

export { Root };
