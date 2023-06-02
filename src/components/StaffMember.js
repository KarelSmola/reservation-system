import React from "react";

const StaffMember = () => {
  return (
    <div className="staff-member">
      <h2 className="staff-member__title">Select a staff member</h2>

      <select
        className="staff-member__select"
        name="staff-member"
        id="staff-member"
      >
        <option value="any">Any</option>
        <option value="Mike Brown">Mike Brown</option>
        <option value="Mike Brown">John Jordan</option>
        <option value="Mike Brown">George Hot</option>
        <option value="Mike Brown">Jessica Steward</option>
      </select>
    </div>
  );
};

export default StaffMember;
