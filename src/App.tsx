import React from "react";
import "./App.css";
import { CopyItemList } from "./components/copyItemList/copyItemList.component";
import { GetStarted } from "./components/getStarted/getStarted.component";
import { Header } from "./components/header/header.component";
import { ShortenInput } from "./components/shortenInput/shortenInput.component";
import { StatisticsSection } from "./components/statisticsSection/statisticsSection.component";

function App() {
  return (
    <>
      <Header />
      <main>
        <section className="relative flex flex-col items-center pb-28 lg:pb-20">
          <GetStarted signedIn={true} />

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
        <section className="mt-10" id="pricing"></section>
      </main>
      <footer id="resources"></footer>
    </>
  );
}

export default App;
