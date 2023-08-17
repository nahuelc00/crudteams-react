import React from 'react';
import PropTypes from 'prop-types';

function ModalDeleteClub({ handleCloseModal, handleConfirmationModal }) {
  return (
    <div className="modal d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-black">Delete club</h5>
          </div>
          <div className="modal-body">
            <p className="text-black">Sure you want to delete club?</p>
          </div>
          <div className="modal-footer">
            <button onClick={handleCloseModal} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button onClick={handleConfirmationModal} type="button" className="btn btn-danger">Delete club</button>
          </div>
        </div>
      </div>
    </div>
  );
}

ModalDeleteClub.propTypes = {
  handleCloseModal: PropTypes.func.isRequired,
  handleConfirmationModal: PropTypes.func.isRequired,
};

export { ModalDeleteClub };
