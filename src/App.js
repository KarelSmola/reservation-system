import React from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import StaffMember from "./components/StaffMember";
import Services from "./components/Services";
import Slots from "./components/Slots";

import Wrapper from "./components/UI/Wrapper";

const App = () => {
  return (
    <div className="main-container">
      <Wrapper>
        <Header />
        <UserForm />
        <StaffMember />
        <Services />
        <Slots />
      </Wrapper>
    </div>
  );
};

export default App;
