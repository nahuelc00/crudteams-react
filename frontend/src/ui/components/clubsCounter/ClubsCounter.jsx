import React from 'react';

function ClubsCounter({ clubsQuantity }) {
  return (
    <p className="m-0 me-3 clubs-counter">
      There are
      { ' ' }
      <span className="fw-bold">{clubsQuantity}</span>
      {' '}
      clubs
    </p>
  );
}

export { ClubsCounter };
