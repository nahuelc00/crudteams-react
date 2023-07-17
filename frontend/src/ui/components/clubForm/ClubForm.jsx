/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import React, { useState } from 'react';
import { Modal } from '..';

function sendClub(clubFormData) {
  return fetch('http://localhost:8080/clubs', {
    method: 'POST',
    body: clubFormData,
  });
}

function ClubForm() {
  const [inputsValue, setInputsValue] = useState({
    name: null,
    shortName: null,
    tla: null,
    nameArea: null,
    idArea: null,
    address: null,
    phone: null,
    website: null,
    email: null,
    founded: null,
    clubColors: null,
    venue: null,
    shieldImg: null,
  });

  const [viewModal, setViewModal] = useState(false);

  function validateForm() {
    const copyOfInputs = { ...inputsValue };
    let counterErrors = 0;

    for (const key in copyOfInputs) {
      const value = copyOfInputs[key];

      if (value === null || value === '') counterErrors += 1;
    }

    if (counterErrors === 0) return true;

    return false;
  }

  function setInputsWithError() {
    const copyOfInputs = { ...inputsValue };

    for (const key in copyOfInputs) {
      const value = copyOfInputs[key];

      if (value === null) {
        copyOfInputs[key] = '';
      }
    }

    setInputsValue(copyOfInputs);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const isFormValid = validateForm();

    if (isFormValid) {
      sendClub(formData).then(() => {
        setViewModal(true);
      });
    } else {
      setInputsWithError();
    }
  }

  function handleOnChange(event) {
    const copyOfInputs = { ...inputsValue };
    copyOfInputs[event.target.name] = event.target.value;
    setInputsValue(copyOfInputs);
  }

  function assignValidationClass(nameInput) {
    if (inputsValue[nameInput] === '') {
      return 'form-control is-invalid';
    } if (inputsValue[nameInput] !== '' && inputsValue[nameInput] !== null) {
      return 'form-control is-valid';
    }
    return 'form-control';
  }

  return viewModal
    ? (
      <Modal
        title="Club saved"
        description="The club has been saved successfully"
        exitRoute="/"
      />
    )
    : (
      <form className="club-form" onSubmit={handleSubmit}>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Name:</label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('name')}
            placeholder="Football Club Barcelona"
            name="name"
            type="text"
          />
          <div className="invalid-feedback">
            Please type a club name
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Shortname:</label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('shortName')}
            placeholder="Barcelona"
            name="shortName"
            type="text"
          />
          <div className="invalid-feedback">
            Please type a club shortname
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Abbreviation:</label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('tla')}
            placeholder="BAR"
            name="tla"
            type="text"
          />
          <div className="invalid-feedback">
            Please type a club abbreviation
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Name Area</label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('nameArea')}
            placeholder="Spain"
            name="nameArea"
            type="text"
          />
          <div className="invalid-feedback">
            Please type a area name of club
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">ID Area</label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('idArea')}
            placeholder="2224"
            name="idArea"
            type="number"
          />
          <div className="invalid-feedback">
            Please type a area id of club
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Address </label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('address')}
            placeholder="C. d'Arístides Maillol, 12, 08028 Barcelona, España"
            name="address"
            type="text"
          />
          <div className="invalid-feedback">
            Please type a club address
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Phone </label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('phone')}
            placeholder="902189900"
            name="phone"
            type="text"
          />
          <div className="invalid-feedback">
            Please type a club phone
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Web </label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('website')}
            placeholder="https://www.fcbarcelona.es/"
            name="website"
            type="text"
          />
          <div className="invalid-feedback">
            Please type a club website
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Email </label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('email')}
            placeholder="oab@fcbarcelona.cat"
            name="email"
            type="email"
          />
          <div className="invalid-feedback">
            Please type a club email
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Founded </label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('founded')}
            placeholder="1899"
            name="founded"
            type="number"
          />
          <div className="invalid-feedback">
            Please type a club foundation date
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Colors </label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('clubColors')}
            placeholder="Red / Blue"
            name="clubColors"
            type="text"
          />
          <div className="invalid-feedback">
            Please type a colors of club
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Stadium </label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('venue')}
            placeholder="Camp Nou"
            name="venue"
            type="text"
          />
          <div className="invalid-feedback">
            Please type the stadium of club
          </div>
        </fieldset>

        <fieldset className="club-form__fieldset">
          <label className="form-label">Shield: </label>
          <input
            onChange={handleOnChange}
            className={assignValidationClass('shieldImg')}
            name="shieldImg"
            type="file"
          />
          <div className="invalid-feedback">
            Please insert the shield image of club
          </div>
        </fieldset>

        <button className="btn btn-primary" type="submit">Save club</button>

      </form>
    );
}

export { ClubForm };
