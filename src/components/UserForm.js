import React from "react";

const UserForm = () => {
  return (
    <form className="user-form">
      <div className="user-form__label-box">
        <label className="user-form__label">First Name</label>
        <input className="user-form__input" type="text" />
      </div>
      <div className="user-form__label-box">
        <label className="user-form__label">Last Name</label>
        <input className="user-form__input" type="text" />
      </div>
      <div className="user-form__label-box">
        <label className="user-form__label">Email</label>
        <input className="user-form__input" type="email" />
      </div>
      <div className="user-form__label-box">
        <label className="user-form__label">Phone Number</label>
        <input className="user-form__input" type="tel" />
      </div>
    </form>
  );
};

export default UserForm;
