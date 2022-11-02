import { useState } from "react";
import { Link } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { returnImageLocation } from "../../utils/funcs/publicFuncs";
import { Hamburger } from "../hamburger/hamburger.component";
import { LogInSignUpButtons, SignOutButton } from "./header.buttons";
interface IHeaderProps {
  handleShowSignUp:()=>void;
  handleShowSignIn:()=>void;
  user:boolean;
}

export const Header = ({handleShowSignUp, handleShowSignIn, user}:IHeaderProps) => {
    const [open, setOpen] = useState(false);
    const handleToggleMenu = ()=> setOpen(!open);
 const handleAuthClick = (handleMethod:()=>void)=>{
  handleToggleMenu();
 handleMethod();
 }
  return (
    <header className="relative flex items-center justify-between px-6 pt-10 lg:max-w-[1100px] mx-auto lg:px-0">
      <Link to="/">
        <img
          src={returnImageLocation("./images/logo.svg")}
          alt="shortly logo"
        />
      </Link>
      <Hamburger onClick={handleToggleMenu} />
      <nav
        className={`absolute z-10 top-[calc(100%+29px)] bg-[#3A3054] w-[88%] flex flex-col items-center rounded-[10px] font-bold text-white lg:relative lg:flex-row lg:justify-between lg:bg-transparent lg:text-[#9E9AA8] lg:text-base lg:w-full ease-in-out duration-300 origin-top ${
          open
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-75 lg:scale-y-100 lg:opacity-100"
        }`}>
        <ul className="flex flex-col items-center justify-between lg:justify-end gap-[30px] py-10 w-[85%] border-b-[#9E9AA8] border-b lg:flex-row lg:border-0 lg:w-1/4 lg:ml-12 lg:gap-7">
          <li className="w-[85%] text-center lg:hover:text-black">
            <Link onClick={handleToggleMenu} to="/features">
              Features
            </Link>
          </li>
          <li className="w-[85%] text-center lg:hover:text-black">
            <Link onClick={handleToggleMenu} to="/pricing">
              Pricing
            </Link>
          </li>
          <li className="w-[85%] text-center lg:hover:text-black">
            <Link onClick={handleToggleMenu} to="resources">
              Resources
            </Link>
          </li>
        </ul>
        <div className="flex flex-col items-center justify-between gap-[30px] lg:gap-9 lg:justify-center py-8 lg:w-1/4 w-[85%]  lg:flex-row">
          {user ? (
            <SignOutButton
              handleAuthClick={handleAuthClick}
              handleSignOut={() => signOutUser()}
            />
          ) : (
            <LogInSignUpButtons
              handleAuthClick={handleAuthClick}
              handleShowSignIn={handleShowSignIn}
              handleShowSignUp={handleShowSignUp}
            />
          )}
        </div>
      </nav>
    </header>
  );
};
