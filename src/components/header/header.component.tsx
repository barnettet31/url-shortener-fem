import { useState } from "react";
import { Hamburger } from "../hamburger/hamburger.component";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const handleToggleMenu = ()=> setOpen(!open);
  
  return (
    <header className="relative flex items-center justify-between px-6 pt-10 lg:max-w-[1100px] mx-auto lg:px-0">
      <img
        src={`${process.env.PUBLIC_URL + "./images/logo.svg"}`}
        alt="shortly logo"
      />
      <Hamburger onClick={handleToggleMenu} />
      <nav className={`absolute z-10 top-[calc(100%+29px)] bg-[#3A3054] w-[88%] flex flex-col items-center rounded-[10px] font-bold text-white lg:relative lg:flex-row lg:justify-between lg:bg-transparent lg:text-[#9E9AA8] lg:text-base lg:w-full ease-in-out duration-300 origin-top ${open? 'scale-y-100 opacity-100':'scale-y-0 opacity-75 lg:scale-y-100 lg:opacity-100'}`} >
        <ul className="flex flex-col items-center justify-between gap-[30px] py-10 w-[85%] border-b-[#9E9AA8] border-b lg:flex-row lg:border-0 lg:w-auto lg:ml-12 lg:gap-7">
          <a href="#features" onClick={handleToggleMenu} className="w-[85%] text-center hover:text-black">
            <li>Features</li>
          </a>
          <a href="#pricing" className="w-[85%] text-center hover:text-black">
            <li>Pricing</li>
          </a>
          <a href="#resources" className="w-[85%] text-center hover:text-black">
            <li>Resources</li>
          </a>
        </ul>
        <ul className="flex flex-col items-center justify-between gap-[30px] lg:gap-9 lg:justify-center py-8 lg:w-auto w-[85%]  lg:flex-row">
          <p onClick={()=>console.log('login')} className="w-[85%] self-center text-center hover:text-black cursor-pointer">
            <li>Login</li>
          </p>
          <a
            href="#"
            className="w-full h-full block lg:inline lg:w-auto lg:px-6 text-center py-3 bg-[#2bd0d0] rounded-[28px] lg:text-white hover:bg-[#9AE3E3] lg:py-1"
          >
            <li>SignUp</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};
