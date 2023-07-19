import React from 'react';
import { Link } from 'react-router-dom';
import { CrossClose, ClubRowInfo, Loader } from '../components';
import { useGetClub } from '../../hooks/useGetClub';

function Club() {
  const { club, isLoading } = useGetClub();

  return (
    isLoading
      ? (
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <Loader />
        </div>
      )
      : (
        <>
          <CrossClose exitRoute="/" />

          <div className="club-page container text-center p-0">

            <img className="club-page__shield-img" src={club.crestUrl} alt={club.shortName} />
            <h1 className="mb-5">{ club.shortName }</h1>

            <div className="container p-0 d-grid mb-5 gap-1 club-page__container-club-data">
              <ClubRowInfo description="Area Name" value={club.area?.name} />
              <ClubRowInfo description="Area Id" value={club.area?.id} />
              <ClubRowInfo description="Name" value={club.name} />
              <ClubRowInfo description="Abbreviation" value={club.tla} />
              <ClubRowInfo description="Phone" value={club.phone} />
              <ClubRowInfo description="Web" value={club.website} />
              <ClubRowInfo description="Email" value={club.email} />
              <ClubRowInfo description="Founded" value={club.founded} />
              <ClubRowInfo description="Colors" value={club.clubColors} />
              <ClubRowInfo description="Stadium" value={club.venue} />
            </div>

            <div>
              <p className="m-0 mb-1 fw-bold club-page__address">{club.address }</p>
              <iframe
                className="club-page__map mb-5"
                title="address-club"
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?q=${club.address}&key=AIzaSyAKMMhR5VZ_KU4lZs3EsHLHo0div3X2viM`}
              />
            </div>

            <div className="d-flex justify-content-center gap-3">
              <Link to={`/form/edit/${club.id}`} className="btn btn-primary club-page__edit-club">Edit Club</Link>
              <Link to={`/club/delete/${club.id}`} className="btn btn-primary club-page__delete-club">Delete club</Link>
            </div>

          </div>
        </>
      )
  );
}

export { Club };
