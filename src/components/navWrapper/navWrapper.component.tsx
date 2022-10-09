import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SignUp } from "../../routes/signup/signUp.route";
import { Footer } from "../footer/footer.component";
import { Header } from "../header/header.component";

export const NavWrapper = () => {
  const [signUpShown, setSignUpShown] = useState(false);
  const handleShowSignUp = ()=> setSignUpShown(!signUpShown);
  return (
    <>
      <Header handleShowSignUp={handleShowSignUp} />
      <Outlet />
      <Footer />
      <SignUp handleToggleShow={handleShowSignUp} isShown={signUpShown}/>
    </>
  );
};
