import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../store";

import { Person, Envelope, Mobile } from "./UI/Icons/Icons";

const UserForm = () => {
  const dispatch = useDispatch();
  const completeState = useSelector((state) => state);

  const changeHandler = (event) => {
    const name = event.target.name;
    dispatch(formActions.inputValue({ [name]: event.target.value }));
  };

  const blurHandler = (event) => {
    const name = event.target.name;
    dispatch(formActions.inputIsTouched({ [name]: true }));
  };

  const invalidClass = "user-form__input user-form__input--invalid";
  const validClass = "user-form__input";

  const firstNameIsValid = completeState.inputValues.firstName.trim() !== "";
  const invalidFirstName =
    !firstNameIsValid && completeState.isTouched.firstName;
  const firstNameClasses = invalidFirstName ? invalidClass : validClass;

  const lastNameIsValid = completeState.inputValues.lastName.trim() !== "";
  const invalidLastName = !lastNameIsValid && completeState.isTouched.lastName;
  const lastNameClasses = invalidLastName ? invalidClass : validClass;

  const emailIsValid =
    completeState.inputValues.email.trim().length > 5 &&
    completeState.inputValues.email.includes("@");
  const invalidEmail = !emailIsValid && completeState.isTouched.email;
  const emailClasses = invalidEmail ? invalidClass : validClass;

  const phoneIsValid = completeState.inputValues.phone.trim() !== "";
  const invalidPhone = !phoneIsValid && completeState.isTouched.email;
  const phoneClasses = invalidPhone ? invalidClass : validClass;

  return (
    <div className="user-form">
      <h2 className="user-form__title">Fill your contacts</h2>
      <form className="user-form__form">
        <div className="user-form__label-box">
          <label className="user-form__label" htmlFor="first-name">
            <Person className="user-form__icon" />
          </label>
          <input
            className={firstNameClasses}
            id="first-name"
            name="firstName"
            type="text"
            placeholder="First name"
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </div>
        <div className="user-form__label-box">
          <label className="user-form__label" htmlFor="last-name">
            <Person className="user-form__icon" />
          </label>
          <input
            className={lastNameClasses}
            id="last-name"
            name="lastName"
            type="text"
            placeholder="Last name"
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </div>
        <div className="user-form__label-box">
          <label className="user-form__label" htmlFor="email">
            <Envelope className="user-form__icon" />
          </label>
          <input
            className={emailClasses}
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </div>
        <div className="user-form__label-box">
          <label className="user-form__label" htmlFor="phone">
            <Mobile className="user-form__icon" />
          </label>
          <input
            className={phoneClasses}
            id="phone"
            name="phone"
            type="tel"
            placeholder="Mobile"
            onChange={changeHandler}
            onBlur={blurHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
