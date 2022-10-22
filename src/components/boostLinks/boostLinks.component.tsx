import React from "react";
interface IBoostLinks {
  isSignedIn: boolean;
}
export const BoostLinks = ({ isSignedIn }: IBoostLinks) => {
  return (
    <section
      className="bg-desktop-shorten flex flex-col items-center justify-center py-16 bg-center bg-cover bg-no-repeat bg-[#3A3054]"
      id="pricing"
    >
      <h3 className="text-white text-bold text-[28px] text-bold leading-[48px] mb-4">
        Boost your links today
      </h3>
      {isSignedIn ? (
        <div
          onClick={()=>{

          }}
          className="py-3 px-4 bg-[#2BD0D0] mx-auto lg:mx-0 cursor-pointer hover:bg-[#9AE3E3] text-white rounded-[28px]"
        >
          Start Shortening Now!
        </div>
      ) : (
        <div
          onClick={() => {
            
            const signUpButton = document.querySelector('#sigup-button') as HTMLElement;
            window.scrollTo({top:0, behavior:'smooth'});
            signUpButton?.click()
          }}
          className="py-3 px-4 bg-[#2BD0D0] mx-auto lg:mx-0 cursor-pointer hover:bg-[#9AE3E3] text-white rounded-[28px]"
        >
          Get Started
        </div>
      )}
    </section>
  );
};
