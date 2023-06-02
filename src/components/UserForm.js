import React from "react";

import { Person, Envelope, Mobile } from "./UI/Icons/Icons";

const UserForm = () => {
  return (
    <div className="user-form">
      <h2 className="user-form__title">Fill your contacts</h2>
      <form className="user-form__form">
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
          <label className="user-form__label" htmlFor="last-name">
            <Person className="user-form__icon" />
          </label>
          <input
            className="user-form__input"
            id="last-name"
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="user-form__label-box">
          <label className="user-form__label" htmlFor="email">
            <Envelope className="user-form__icon" />
          </label>
          <input
            className="user-form__input"
            id="email"
            type="email"
            placeholder="E-mail"
          />
        </div>
        <div className="user-form__label-box">
          <label className="user-form__label" htmlFor="phone">
            <Mobile className="user-form__icon" />
          </label>
          <input
            className="user-form__input"
            id="phone"
            type="tel"
            placeholder="Mobile"
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
