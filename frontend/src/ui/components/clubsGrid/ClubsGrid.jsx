import React from 'react';
import { Link } from 'react-router-dom';
import { handleErrorInShieldImg } from '../../../utilities/utilities';
import { ClubsColumns } from '../clubsColumns/ClubsColumns';

function ClubsGrid({ clubs }) {
  return (
    <>
      <ClubsColumns />

      <div className="d-grid gap-3">

        { clubs.map(({
          shortName, crestUrl, id, area,
        }) => (
          <div key={id} className="container club text-center p-0">

            <div className="row m-0 d-flex align-items-center">

              <div className="col p-0 container-shield-name">
                <img onError={handleErrorInShieldImg} className="container-shield-name__shield" src={crestUrl} alt="" />
                <span className="club__name">{shortName}</span>
              </div>

              <span className="club__country col p-0">{ area.name }</span>

              <div className="actions col p-0">
                <Link to={`/club/:${id}`}>
                  <img className="actions__see" src="./images/actions/see.png" alt="see" />
                </Link>

                <Link to={`/form/edit/:${id}`}>
                  <img className="actions__edit" src="./images/actions/edit.png" alt="edit" />
                </Link>

                <Link>
                  <img className="actions__delete" src="./images/actions/delete.png" alt="delete" />
                </Link>
              </div>

            </div>

          </div>
        ))}

      </div>
    </>
  );
}

export { ClubsGrid };
