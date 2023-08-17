import React from 'react';
import PropTypes from 'prop-types';

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

ClubsCounter.propTypes = {
  clubsQuantity: PropTypes.number,
};

export { ClubsCounter };
