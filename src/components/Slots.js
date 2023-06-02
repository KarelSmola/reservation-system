import React from "react";

const newDate = new Date();

const day = newDate.getDay();
const date = newDate.getDate();
const month = newDate.getMonth() + 1;
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Slots = () => {
  return (
    <div className="slots">
      <h2 className="slots__title">Select a date and time</h2>
      <div className="slots__content-wrap">
        <button className="slots__switch-week-btn">Back</button>
        <ul className="slots__week-slots">
          <li className="slots__day-slot-wrap">
            <p className="slots__week-day">{days[day]}</p>
            <p className="slots__date">{`${date}. ${month}.`}</p>
          </li>
          <li className="slots__day-slot-wrap">
            <p className="slots__week-day">{days[day + 1]}</p>
            <p className="slots__date">{`${date + 1}. ${month}.`}</p>
          </li>
        </ul>
        <button className="slots__switch-week-btn">Forward</button>
      </div>
    </div>
  );
};

export default Slots;
