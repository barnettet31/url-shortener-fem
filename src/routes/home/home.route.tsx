import { useContext } from "react";
import { handleURLShortenRequest } from "../../api/urlShortener";
import { BoostLinks } from "../../components/boostLinks/boostLinks.component";
import { CopyItemList } from "../../components/copyItemList/copyItemList.component";
import { GetStarted } from "../../components/getStarted/getStarted.component";
import { ShortenInput } from "../../components/shortenInput/shortenInput.component";
import { StatisticsSection } from "../../components/statisticsSection/statisticsSection.component";
import { UrlContext } from "../../services/urls/urls.context";

interface IHomeProps {
  isSignedIn: boolean;
}
export const Home = ({ isSignedIn }: IHomeProps) => {
  const {data, setUrls} = useContext(UrlContext);
  const handleSubmit = async(link: string) => {
    const data = await handleURLShortenRequest(link);
    setUrls(data);
  }
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
              items={data}
            />
            <StatisticsSection />
          </div>
        </section>
        <BoostLinks isSignedIn={isSignedIn} />
      </main>
    </>
  );
};
