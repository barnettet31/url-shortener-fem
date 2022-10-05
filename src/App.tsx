import React, { useState } from "react";
import "./App.css";
import { BoostLinks } from "./components/boostLinks/boostLinks.component";
import { CopyItemList } from "./components/copyItemList/copyItemList.component";
import { GetStarted } from "./components/getStarted/getStarted.component";
import { Header } from "./components/header/header.component";
import { ShortenInput } from "./components/shortenInput/shortenInput.component";
import { StatisticsSection } from "./components/statisticsSection/statisticsSection.component";
import { returnImageLocation } from "./utils/funcs/publicFuncs";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);
  return (
    <>
      <Header />
      <main>
        <section className="relative flex flex-col items-center pb-28 lg:pb-20">
          <GetStarted signedIn={isSignedIn} />

          <ShortenInput />
        </section>

        <section
          id="features"
          className="bg-[#EFF1F7] mt-4 pt-32 lg:pt-24 px-6 pb-20"
        >
          <div className="mx-auto max-w-[1108px]">
            <CopyItemList
              items={[
                {
                  originalLink: "www.frontendmentor.io",
                  shortenedLink: "https://rel.ink/k4lkyk",
                },
              ]}
            />
            <StatisticsSection />
          </div>
        </section>
        <BoostLinks isSignedIn={isSignedIn} />
      </main>
      <footer
        id="resources"
        className="bg-[#232127] py-14 lg:py-18"
      >
        <div className="flex flex-col items-center gap-12 justify-between lg:flex-row max-w-[1108px] mx-auto lg:items-start">
        <div className="flex flex-col items-start justify-start lg:self-start lg:w-1/5">
        <img
          src={returnImageLocation("/images/logo-white.svg")}
          alt="logo white"
          className=""
        /></div>
        <div className="flex flex-col justify-between text-center lg:text-left lg:flex-row lg:w-3/5">
          <div className="flex flex-col gap-[10px] mb-10">
            <p className="mb-3 text-white text-bold">Features</p>
            <a href="#">
              <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                Link Shortening
              </p>
            </a>
            <a href="#">
              <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                Branded Links
              </p>
            </a>
            <a href="#">
              <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                Analytics
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-[10px] mb-10">
            <p className="mb-3 text-white text-bold">Resources</p>
            <a href="#">
              <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                Blog
              </p>
            </a>
            <a href="#">
              <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                Developers
              </p>
            </a>
            <a href="#">
              <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                Support
              </p>
            </a>
          </div>
          <div className="flex flex-col gap-[10px] mb-12">
            <p className="mb-3 text-white text-bold">Company</p>
            <a href="#">
              <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                About
              </p>
            </a>
            <a href="#">
              <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                Our Team
              </p>
            </a>
            <a href="#">
              <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                Careers
              </p>
            </a>
            <a href="#">
              <p className="text-[#bfbfbf] hover:text-[#2BD0D0] text-[15px] leading-[22px] font-[500]">
                Contact
              </p>
            </a>
          </div>
        </div>
        <div className="flex gap-6 lg:w-1/5">
              <div className="w-6 h-6 bg-no-repeat bg-facebook icon-hover "></div>
              <div className="w-6 h-6 bg-no-repeat bg-twitter icon-hover"></div>
              <div className="w-6 h-6 bg-no-repeat bg-pintrest icon-hover"></div>
              <div className="w-6 h-6 bg-no-repeat bg-instagram icon-hover"></div>
        </div>
        </div>
      </footer>
    </>
  );
}

export default App;
