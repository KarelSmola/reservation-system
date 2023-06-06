import React, { useState } from "react";

const Slots = () => {
  const [newDate, setNewDate] = useState(new Date());

  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentDay = new Date(
    newDate.getFullYear(),
    newDate.getMonth(),
    newDate.getDate()
  );

  let weekday = currentDay.getDay();

  let currentDays = [];

  for (let day = 0; day < 7; day++) {
    if (day === 0 && weekday === 0) {
      currentDay.setDate(currentDay.getDate());
    } else if (day === 0) {
      currentDay.setDate(currentDay.getDate() + (day - weekday));
    } else {
      currentDay.setDate(currentDay.getDate() + 1);
    }

    let calenderDay = {
      weekDay: weekdays[currentDay.getDay()],
      day: currentDay.getDate() + 1,
      month: month[currentDay.getMonth()],
    };
    currentDays.push(calenderDay);
  }

  const previousWeek = () => {};

  const nextWeek = () => {};

  return (
    <div className="slots">
      <h2 className="slots__title">Select a date and time</h2>
      <div className="slots__content-wrap">
        <button className="slots__switch-week-btn" onClick={previousWeek}>
          Back
        </button>
        <ul className="slots__week-slots">
          {currentDays.map((day) => (
            <li className="slots__day-slot-wrap">
              <p className="slots__week-day">{day.weekDay}</p>
              <p className="slots__week-day">{day.day}</p>
              <p className="slots__week-day">{day.month}</p>
            </li>
          ))}
        </ul>
        <button className="slots__switch-week-btn" onClick={nextWeek}>
          Forward
        </button>
      </div>
    </div>
  );
};

export default Slots;
