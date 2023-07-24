/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getClub } from '../../../services/clubs';

function ClubForm({ handleSaveClub }) {
  const { id } = useParams();

  const [inputsValue, setInputsValue] = useState({
    name: null,
    address: null,
    nameArea: null,
    idArea: null,
    clubColors: null,
    email: null,
    founded: null,
    phone: null,
    shortName: null,
    tla: null,
    venue: null,
    website: null,
    shieldImg: null,
  });

  useEffect(() => {
    if (id !== undefined) {
      getClub(id).then((clubData) => {
        setInputsValue({
          name: clubData.name,
          address: clubData.address,
          nameArea: clubData.nameArea,
          idArea: clubData.idArea,
          clubColors: clubData.clubColors,
          email: clubData.email,
          founded: clubData.founded,
          phone: clubData.phone,
          shortName: clubData.shortName,
          tla: clubData.tla,
          venue: clubData.venue,
          website: clubData.website,
          shieldImg: null,
        });
      });
    }
  }, []);

  function validateForm() {
    const copyOfInputs = { ...inputsValue };

    let counterErrors = 0;

    for (const key in copyOfInputs) {
      const value = copyOfInputs[key];

      const isValueNull = value === null;
      const isValueEmpty = value === '';

      if (isValueNull) {
        copyOfInputs[key] = '';
        counterErrors += 1;
      }

      if (isValueEmpty) {
        counterErrors += 1;
      }
    }

    if (counterErrors === 0) {
      return true;
    }

    setInputsValue(copyOfInputs);
    return false;
  }

  function handleOnChange(event) {
    const copyOfInputs = { ...inputsValue };
    copyOfInputs[event.target.name] = event.target.value;
    setInputsValue(copyOfInputs);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const isFormValid = validateForm();

    if (isFormValid) handleSaveClub(id, formData);
  }

  return (
    <form className="club-form mt-4" onSubmit={handleSubmit}>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Name</label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.name === '' ? 'is-invalid' : ''}`}
          placeholder="Football Club Barcelona"
          name="name"
          type="text"
          defaultValue={inputsValue.name}
        />
        <div className="invalid-feedback">
          Please type a club name
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Shortname</label>
        <input
          className={`form-control ${inputsValue.shortName === '' ? 'is-invalid' : ''}`}
          placeholder="Barcelona"
          name="shortName"
          type="text"
          onChange={handleOnChange}
          defaultValue={inputsValue.shortName}
        />
        <div className="invalid-feedback">
          Please type a club shortname
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Abbreviation</label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.tla === '' ? 'is-invalid' : ''}`}
          placeholder="BAR"
          name="tla"
          type="text"
          defaultValue={inputsValue.tla}
        />
        <div className="invalid-feedback">
          Please type a club abbreviation
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Name Area</label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.nameArea === '' ? 'is-invalid' : ''}`}
          placeholder="Spain"
          name="nameArea"
          type="text"
          defaultValue={inputsValue.nameArea}
        />
        <div className="invalid-feedback">
          Please type a area name of club
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">ID Area</label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.idArea === '' ? 'is-invalid' : ''}`}
          placeholder="2224"
          name="idArea"
          type="number"
          defaultValue={inputsValue.idArea}
        />
        <div className="invalid-feedback">
          Please type a area id of club
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Address</label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.address === '' ? 'is-invalid' : ''}`}
          placeholder="C. d'Arístides Maillol, 12, 08028 Barcelona, España"
          name="address"
          type="text"
          defaultValue={inputsValue.address}
        />
        <div className="invalid-feedback">
          Please type a club address
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Phone </label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.phone === '' ? 'is-invalid' : ''}`}
          placeholder="902189900"
          name="phone"
          type="text"
          defaultValue={inputsValue.phone}
        />
        <div className="invalid-feedback">
          Please type a club phone
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Web</label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.website === '' ? 'is-invalid' : ''}`}
          placeholder="https:ww.fcbarcelona.es/"
          name="website"
          type="text"
          defaultValue={inputsValue.website}
        />
        <div className="invalid-feedback">
          Please type a club website
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Email </label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.email === '' ? 'is-invalid' : ''}`}
          placeholder="oab@fcbarcelona.cat"
          name="email"
          type="email"
          defaultValue={inputsValue.email}

        />
        <div className="invalid-feedback">
          Please type a club email
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Founded </label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.founded === '' ? 'is-invalid' : ''}`}
          placeholder="1899"
          name="founded"
          type="number"
          defaultValue={inputsValue.founded}

        />
        <div className="invalid-feedback">
          Please type a club foundation date
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Colors </label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.clubColors === '' ? 'is-invalid' : ''}`}
          placeholder="Red / Blue"
          name="clubColors"
          type="text"
          defaultValue={inputsValue.clubColors}

        />
        <div className="invalid-feedback">
          Please type a colors of club
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Stadium </label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.venue === '' ? 'is-invalid' : ''}`}
          placeholder="Camp Nou"
          name="venue"
          type="text"
          defaultValue={inputsValue.venue}

        />
        <div className="invalid-feedback">
          Please type the stadium of club
        </div>
      </fieldset>

      <fieldset className="club-form__fieldset">
        <label className="form-label">Shield</label>
        <input
          onChange={handleOnChange}
          className={`form-control ${inputsValue.shieldImg === '' ? 'is-invalid' : ''}`}
          name="shieldImg"
          type="file"
        />
        <div className="invalid-feedback">
          Please insert the shield image of club
        </div>
      </fieldset>

      <div className="club-form__container-button">
        <button className="btn btn-primary" type="submit">Save club</button>
      </div>

    </form>
  );
}

export { ClubForm };
