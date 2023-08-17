import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CrossClose({ exitRoute }) {
  return (
    <Link to={exitRoute}>
      <img className="cross-close" src="/images/cross-close.svg" alt="cross-close" />
    </Link>
  );
}

CrossClose.propTypes = {
  exitRoute: PropTypes.string.isRequired,
};

export { CrossClose };
