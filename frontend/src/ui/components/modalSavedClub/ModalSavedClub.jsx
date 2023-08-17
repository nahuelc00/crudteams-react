import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function ModalSavedClub({ title, description, exitRoute }) {
  const navigate = useNavigate();

  function handleOnClick() {
    navigate(exitRoute);
  }

  return (
    <div className="modal-body" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{ title }</h5>
          </div>
          <div className="modal-body">
            <p>{ description }</p>
          </div>
          <div className="modal-footer">
            <button onClick={handleOnClick} type="button" className="btn btn-primary">Exit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalSavedClub.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  exitRoute: PropTypes.string.isRequired,
};

export { ModalSavedClub };
