import React, { useReducer, useEffect } from "react";

import { Person, Envelope, Mobile } from "./UI/Icons/Icons";

const initialState = {
  inputValues: { firstName: "", lastName: "", email: "", phone: "" },
  blur: { firstName: false, lastName: false, email: false, phone: false },
};

const formReducer = (state, action) => {
  if (action.type === "CHANGE_HANDLER") {
    return {
      ...state,
      inputValues: { ...state.inputValues, ...action.payload },
    };
  }

  if (action.type === "BLUR") {
    return { ...state, blur: { ...state.blur, ...action.payload } };
  }

  return initialState;
};

const UserForm = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { firstName, lastName, email, phone } = state.inputValues;

  useEffect(() => {
    const timer = setTimeout(() => {}, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [firstName, lastName, email, phone]);

  const inputBlurHandler = (event) => {
    const name = event.target.name;
    dispatch({ type: "BLUR", payload: { [name]: true } });
  };

  const inputChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    dispatch({
      type: "CHANGE_HANDLER",
      payload: { [name]: value },
    });
  };

  const validName = state.inputValues.firstName.trim().length !== 0;
  const invalidName = !validName && state.blur.firstName;

  const validLastName = state.inputValues.lastName.trim().length !== 0;
  const invalidLastName = !validLastName && state.blur.lastName;

  const inputNameClasses = invalidName
    ? "user-form__input user-form__input--invalid"
    : "user-form__input";

  const inputLastNameClasses = invalidLastName
    ? "user-form__input user-form__input--invalid"
    : "user-form__input";

  return (
    <div className="user-form">
      <h2 className="user-form__title">Fill your contacts</h2>
      <form className="user-form__form">
        <div className="user-form__label-box">
          <label className="user-form__label" htmlFor="first-name">
            <Person className="user-form__icon" />
          </label>
          <input
            className={inputNameClasses}
            id="first-name"
            name="firstName"
            type="text"
            placeholder="First name"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
        </div>
        <div className="user-form__label-box">
          <label className="user-form__label" htmlFor="last-name">
            <Person className="user-form__icon" />
          </label>
          <input
            className={inputLastNameClasses}
            id="last-name"
            name="lastName"
            type="text"
            placeholder="Last name"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
        </div>
        <div className="user-form__label-box">
          <label className="user-form__label" htmlFor="email">
            <Envelope className="user-form__icon" />
          </label>
          <input
            className="user-form__input"
            id="email"
            name="email"
            type="email"
            placeholder="E-mail"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
        </div>
        <div className="user-form__label-box">
          <label className="user-form__label" htmlFor="phone">
            <Mobile className="user-form__icon" />
          </label>
          <input
            className="user-form__input"
            id="phone"
            name="phone"
            type="tel"
            placeholder="Mobile"
            onChange={inputChangeHandler}
            onBlur={inputBlurHandler}
          />
        </div>
      </form>
    </div>
  );
};

export default UserForm;
