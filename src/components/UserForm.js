import React from "react";

import { Person, Envelope, Mobile } from "./UI/Icons/Icons";

const UserForm = () => {
  return (
    <form className="user-form">
      <div className="user-form__label-box">
        <label className="user-form__label" htmlFor="first-name">
          <Person className="user-form__icon" />
        </label>
        <input
          className="user-form__input"
          id="first-name"
          type="text"
          placeholder="First name"
        />
      </div>
      <div className="user-form__label-box">
        <label className="user-form__label">
          <Person className="user-form__icon" />
        </label>
        <input
          className="user-form__input"
          type="text"
          placeholder="Last name"
        />
      </div>
      <div className="user-form__label-box">
        <label className="user-form__label">
          <Envelope className="user-form__icon" />
        </label>
        <input className="user-form__input" type="email" placeholder="E-mail" />
      </div>
      <div className="user-form__label-box">
        <label className="user-form__label">
          <Mobile className="user-form__icon" />
        </label>
        <input className="user-form__input" type="tel" placeholder="+420" />
      </div>
    </form>
  );
};

export default UserForm;
