export const StatisticsSection = () => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="text-[28px] text-[#34313D] leading-[48px] lg:text-[40px] mb-4 lg:mb-[18px]">
        Advanced Statistics
      </h3>
      <p className="text-[#9E9AA8] text-[18px] leading-[32px] lg:text-[16px] lg:leading-[28px] max-w-[500px] text-center">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="flex flex-col gap-12 mt-[92px] lg:flex-row">
        <div className="flex flex-col w-[327px] h-[289px] lg:w-[350px] lg:h-[311px] relative">
          <div className=" absolute -top-[44px] left-[120px] lg:left-[53px] w-[88px] h-[88px] rounded-full bg-[#3A3054] flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL} ./images/icon-brand-recognition.svg`}
              alt=""
              className="w-24px"
            />
          </div>
          <div className="w-full bg-white pt-[77px] rounded-[5px] px-8 pb-8">
            <h3 className="text-[#3a3054]">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[327px] h-[289px] lg:w-[350px] lg:h-[311px] relative">
          <div className=" absolute -top-[44px] left-[120px] lg:left-[53px] w-[88px] h-[88px] rounded-full bg-[#3A3054] flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL} ./images/icon-brand-recognition.svg`}
              alt=""
              className="w-24px"
            />
          </div>
          <div className="w-full bg-white pt-[77px] rounded-[5px] px-8 pb-8">
            <h3 className="text-[#3a3054]">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
        <div className="flex flex-col w-[327px] h-[289px] lg:w-[350px] lg:h-[311px] relative">
          <div className=" absolute -top-[44px] left-[120px] lg:left-[53px] w-[88px] h-[88px] rounded-full bg-[#3A3054] flex items-center justify-center">
            <img
              src={`${process.env.PUBLIC_URL} ./images/icon-brand-recognition.svg`}
              alt=""
              className="w-24px"
            />
          </div>
          <div className="w-full bg-white pt-[77px] rounded-[5px] px-8 pb-8">
            <h3 className="text-[#3a3054]">Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
};
