import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';

function App() {
  return (
    <>
   <Header/>
   <main className='max-w-[1108px] mx-auto mt-2'>
    <section className=''>
      <div className="flex flex-col lg:items-center lg:flex-row gap-9 lg:gap-[100px]">
      <img src={process.env.PUBLIC_URL +"/images/illustration-working.svg"} alt="" className='ml-6 lg:ml-0 lg:mr-[-123px] min-w-[511px] lg:min-w-[733px] lg:order-2'/>

      <div className='flex flex-col px-6 lg:px-0 items-start gap-4 text-center lg:text-left lg:order-1 lg:min-w-[50%]'>
        <h1 className='text-[42px] leading-[48px] tracking-tighter font-bold lg:text-[80px] lg:leading-[90px] lg:tracking-[-2px]'>More than just shorter links</h1>
        <p className="text-[#9E9AA8] text-lg lg:text-[22px] lg:leading-[36px] lg:tracking-[0.15px]">Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <div className="py-3 px-4 bg-[#2BD0D0] mx-auto lg:mx-0 cursor-pointer hover:bg-[#9AE3E3] text-white rounded-[28px]">Get Started</div>
      </div>
      </div>
       
    </section>
    <section id="features" className="bg-[#BFBFBF]">
    <div className="w-[87%] -mt-[4rem] lg:w-full lg:flex-row mx-auto flex flex-col gap-6 bg-mobile-shorten lg:bg-desktop-shorten bg-no-repeat bg-right bg-contain lg:bg-cover bg-[#3A3054]  py-[3.25rem] justify-center items-center rounded-[10px] px-6 lg:px-16">
        <input placeholder='Shorten a link here...' className='rounded-[10px] w-full py-3 px-6 outline-none' type="text" /> 
        <div className="py-3 px-4 w-full lg:w-[188px] text-center bg-[#2bd0d0] cursor-pointer hover:bg-[#9ae3e3] text-white rounded-[10px]">Shorten It!</div>
        </div>
      <div className='flex flex-col justify-between px-4 bg-white lg:flex-row rounded-[10px]'> <p className="text-black">www.frontendmentor.io</p> <div className="flex flex-col lg:flex-row"><p className='text-[#2bd0d0]'>https://rel.link/gxOX</p><div className="rounded-[10px] bg-[#2bd0d0] cursor-pointer hover:bg-[#9ae3e3] text-white text-center">Copy</div></div></div>
      <h3>Advanced Statistics</h3>
      <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
    </section>
    <section id="pricing"></section>
   </main>
   <footer id="resources"></footer>
   </>
  );
}

export default App;
