import React from "react";

const currentDate = new Date();

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

let firstDayOfMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  1
);
let weekdayOfFirstDay = firstDayOfMonth.getDay();
let currentDays = [];

for (let day = 0; day < 7; day++) {
  if (day === 0 && weekdayOfFirstDay === 0) {
    firstDayOfMonth.setDate(firstDayOfMonth.getDate());
  } else if (day === 0) {
    firstDayOfMonth.setDate(
      firstDayOfMonth.getDate() + (day - weekdayOfFirstDay)
    );
  } else {
    firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
  }

  let calenderDay = {
    weekDay: weekdays[firstDayOfMonth.getDay()],
    day: firstDayOfMonth.getDate(),
    month: month[firstDayOfMonth.getMonth()],
  };

  currentDays.push(calenderDay);
}

console.log(currentDays[0].weekDay);

const Slots = () => {
  return (
    <div className="slots">
      <h2 className="slots__title">Select a date and time</h2>
      <div className="slots__content-wrap">
        <button className="slots__switch-week-btn">Back</button>
        <ul className="slots__week-slots">
          {currentDays.map((day) => (
            <li className="slots__day-slot-wrap">
              <p className="slots__week-day">{day.weekDay}</p>
              <p className="slots__week-day">{day.day}</p>
              <p className="slots__week-day">{day.month}</p>
            </li>
          ))}
        </ul>
        <button className="slots__switch-week-btn">Forward</button>
      </div>
    </div>
  );
};

export default Slots;
