import { returnImageLocation } from "../../utils/funcs/publicFuncs";

interface IGetStartedProps{
    signedIn:boolean;
}
export const GetStarted = ({signedIn}:IGetStartedProps)=>{
    return(
        <div className="max-w-[1108px] mx-auto mt-2 w-[95%]">
        <div className="flex flex-col lg:items-center lg:flex-row gap-9 lg:gap-[100px]">
          <img
            src={returnImageLocation("/images/illustration-working.svg")}
            alt=""
            className="ml-6 lg:ml-0 lg:mr-[-123px] min-w-[511px] lg:min-w-[733px] lg:order-2"
          />

          <div className="flex flex-col px-6 lg:px-0 items-start gap-4 text-center lg:text-left lg:order-1 lg:min-w-[50%]">
            <h1 className="text-[42px] leading-[48px] tracking-tighter font-bold lg:text-[80px] lg:leading-[90px] lg:tracking-[-2px]">
              More than just shorter links
            </h1>
            <p className="text-[#9E9AA8] text-lg lg:text-[22px] lg:leading-[36px] lg:tracking-[0.15px]">
              Build your brand's recognition and get detailed insights on
              how your links are performing.
            </p>
            {signedIn? <a href="#shorten-links" className="py-3 px-4 bg-[#2BD0D0] mx-auto lg:mx-0 cursor-pointer hover:bg-[#9AE3E3] text-white rounded-[28px]">Start Shortening Now!</a>:<div onClick={()=>console.log('clicked getStarted')} className="py-3 px-4 bg-[#2BD0D0] mx-auto lg:mx-0 cursor-pointer hover:bg-[#9AE3E3] text-white rounded-[28px]">
              Get Started
            </div>}
          </div>
        </div>
      </div>
    )
}