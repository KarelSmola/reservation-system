import React from "react";
import Header from "./components/Header";
import UserForm from "./components/UserForm";
import StaffMember from "./components/StaffMember";
import Services from "./components/Services";

import Wrapper from "./components/UI/Wrapper";

const App = () => {
  return (
    <div className="main-container">
      <Wrapper>
        <Header />
        <UserForm />
        <StaffMember />
        <Services />
      </Wrapper>
    </div>
  );
};

export default App;
