import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { SignIn } from "../../routes/signin/signin.route";
import { SignUp } from "../../routes/signup/signUp.route";
import { Footer } from "../footer/footer.component";
import { Header } from "../header/header.component";

export const NavWrapper = () => {
  const [signUpShown, setSignUpShown] = useState(false);
  const [signInShown, setSignInShown] = useState(false);
  const handleShowSignUp = ()=> setSignUpShown(!signUpShown);
  const handleShowSignIn = ()=> setSignInShown(!signInShown);
  return (
    <>
      <Header handleShowSignIn={handleShowSignIn} handleShowSignUp={handleShowSignUp} />
      <Outlet />
      <Footer />
      <SignUp handleToggleShow={handleShowSignUp} isShown={signUpShown}/>
      <SignIn isShown={signInShown} handleToggleShow={handleShowSignIn}/>
    </>
  );
};
