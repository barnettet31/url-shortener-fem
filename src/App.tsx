import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';

function App() {
  return (
    <>
   <Header/>
   <main className='max-w-[1108px] mx-auto'>
    <section className='flex flex-col lg:items-center mt-2 lg:flex-row gap-9 lg:gap-[100px]'>
    <img src={process.env.PUBLIC_URL +"/images/illustration-working.svg"} alt="" className='ml-6 lg:ml-0 lg:mr-[-123px] min-w-[511px] lg:min-w-[733px] lg:order-2'/>

      <div className='flex flex-col px-6 lg:px-0 items-start gap-4 text-center lg:text-left lg:order-1 lg:min-w-[50%]'>
        <h1 className='text-[42px] leading-[48px] tracking-tighter font-bold lg:text-[80px] lg:leading-[90px] lg:tracking-[-2px]'>More than just shorter links</h1>
        <p className="text-[#9E9AA8] text-lg lg:text-[22px] lg:leading-[36px] lg:tracking-[0.15px]">Build your brand's recognition and get detailed insights on how your links are performing.</p>
        <div className="py-3 px-4 bg-[#2BD0D0] mx-auto cursor-pointer hover:bg-[#9AE3E3] text-white rounded-[28px]">Get Started</div>
      </div>
    </section>
    <section id="input"></section>
    <section id="features"></section>
    <section id="pricing"></section>
   </main>
   <footer id="resources"></footer>
   </>
  );
}

export default App;
