import React from 'react';
import { Link } from 'react-router-dom';

function AddClub() {
  return (
    <Link className="btn btn-light" to="form/add">Add Club</Link>
  );
}

export { AddClub };
