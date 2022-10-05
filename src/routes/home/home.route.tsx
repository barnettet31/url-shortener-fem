import { BoostLinks } from "../../components/boostLinks/boostLinks.component";
import { CopyItemList } from "../../components/copyItemList/copyItemList.component";
import { GetStarted } from "../../components/getStarted/getStarted.component";
import { ShortenInput } from "../../components/shortenInput/shortenInput.component";
import { StatisticsSection } from "../../components/statisticsSection/statisticsSection.component";

interface IHomeProps {
  isSignedIn: boolean;
}
export const Home = ({ isSignedIn }: IHomeProps) => {
  const handleSubmit = (link: string) => alert(link);
  return (
    <>
      <main>
        <section className="relative flex flex-col items-center pb-28 lg:pb-20">
          <GetStarted signedIn={isSignedIn} />

          <ShortenInput handleSubmit={handleSubmit} />
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
    </>
  );
};
