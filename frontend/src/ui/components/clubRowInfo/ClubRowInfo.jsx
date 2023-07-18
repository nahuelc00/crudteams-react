import React from 'react';

function ClubRowInfo({ description, value }) {
  return (
    <div className="row m-0">
      <div className="col d-flex justify-content-between p-0 gap-2">
        <p className="m-0">{description }</p>
        <p className="m-0 text-break text-start fw-bold">{value}</p>
      </div>
    </div>
  );
}

export { ClubRowInfo };
