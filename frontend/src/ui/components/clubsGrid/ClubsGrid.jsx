/* eslint-disable import/no-cycle */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleErrorInShieldImg } from '../../../utilities/utilities';
import { ClubsColumns } from '..';

function ClubsGrid({ clubs }) {
  return (
    <>
      <ClubsColumns />

      <div className="d-grid gap-3">
        { clubs.map(({
          shortName, crestUrl, id, nameArea,
        }) => (

          <div key={id} className="container club text-center p-0">

            <div className="row m-0 d-flex align-items-center">

              <div className="col p-0 container-shield-name">
                <img onError={handleErrorInShieldImg} className="container-shield-name__shield" src={crestUrl} alt="" />
                <span className="container-shield-name__name">{shortName}</span>
              </div>

              <span className="club__country col p-0">{ nameArea }</span>

              <div className="actions col p-0">
                <Link to={`/club/${id}`}>
                  <img className="actions__see" src="/actions/see.png" alt="see" />
                </Link>

                <Link to={`/form/edit/${id}`}>
                  <img className="actions__edit" src="/actions/edit.png" alt="edit" />
                </Link>

                <Link to={`/club/delete/${id}`}>
                  <img className="actions__delete" src="/actions/delete.png" alt="delete" />
                </Link>
              </div>

            </div>

          </div>
        ))}

      </div>
    </>
  );
}

ClubsGrid.propTypes = {
  clubs: PropTypes.arrayOf(PropTypes.shape({
    shortName: PropTypes.string,
    crestUrl: PropTypes.string,
    id: PropTypes.number.isRequired,
    nameArea: PropTypes.string,
  })).isRequired,
};

export { ClubsGrid };
