import React from 'react';
import { Link } from 'react-router-dom';

import { getGoogleMapsKey } from '../../env';

import { useGetClub } from '../../hooks/useGetClub';

import { convertUTCtoLocalTime, handleErrorInShieldImg } from '../../utilities/utilities';

import { CrossClose, ClubRowInfo, Loader } from '../components';

const GOOGLE_MAPS_KEY = getGoogleMapsKey();

function Club() {
  const { club, isLoading } = useGetClub();

  if (isLoading) {
    return (
      <div className="club-page-loader-container">
        <Loader />
      </div>
    );
  }
  return (
    <>
      <CrossClose exitRoute="/" />

      <div className="club-page container text-center p-0">

        <img onError={handleErrorInShieldImg} className="club-page__shield-img" src={club.crestUrl} alt={club.shortName} />
        <h1 className="mb-5">{ club.shortName }</h1>

        <div className="container p-0 d-grid mb-5 gap-1 club-page__container-club-data">
          <ClubRowInfo description="Area Name" value={club.nameArea} />
          <ClubRowInfo description="Area Id" value={club.idArea} />
          <ClubRowInfo description="Name" value={club.name} />
          <ClubRowInfo description="Abbreviation" value={club.tla} />
          <ClubRowInfo description="Phone" value={club.phone} />
          <ClubRowInfo description="Web" value={club.website} />
          <ClubRowInfo description="Email" value={club.email} />
          <ClubRowInfo description="Founded" value={club.founded} />
          <ClubRowInfo description="Colors" value={club.clubColors} />
          <ClubRowInfo description="Stadium" value={club.venue} />
          <ClubRowInfo description="Created" value={convertUTCtoLocalTime(club.createdAt)} />
        </div>

        <div>
          <p className="m-0 mb-1 fw-bold club-page__address">{club.address }</p>
          <iframe
            className="club-page__map mb-5"
            title="address-club"
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?q=${club.address}&key=${GOOGLE_MAPS_KEY}`}
          />
        </div>

        <div className="d-flex justify-content-center gap-3">
          <Link to={`/form/edit/${club.id}`} className="btn btn-primary club-page__edit-club">Edit Club</Link>
          <Link to={`/club/delete/${club.id}`} className="btn btn-primary club-page__delete-club">Delete club</Link>
        </div>

      </div>
    </>
  );
}

export { Club };
