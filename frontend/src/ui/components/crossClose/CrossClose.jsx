import React from 'react';
import { Link } from 'react-router-dom';

function CrossClose({ exitRoute }) {
  return (
    <Link to={exitRoute}>
      <img className="cross-close" src="/images/cross-close.svg" alt="cross-close" />
    </Link>
  );
}

export { CrossClose };
