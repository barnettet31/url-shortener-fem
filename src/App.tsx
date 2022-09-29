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
        <section className="mt-10" id="pricing"><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum labore iure doloribus, corrupti dignissimos voluptatibus ipsum molestiae numquam quod aperiam, alias saepe totam veritatis enim ipsam voluptatem earum placeat non assumenda architecto consequatur minima eaque. Delectus voluptas tempora impedit, libero perspiciatis optio laboriosam eaque aliquam! Optio porro tempora asperiores quod perspiciatis. Pariatur assumenda veniam, maiores quam eveniet omnis qui voluptas natus magnam accusantium autem odit tempore nobis earum ad doloribus recusandae asperiores iusto tenetur quos facilis neque similique velit? Inventore, quibusdam velit placeat praesentium asperiores sapiente doloremque cum voluptates atque non deleniti in quis commodi odio ipsa amet iste totam? Aspernatur impedit minus doloremque officiis quo quia corrupti ipsa tenetur qui vitae quam, laborum excepturi veritatis minima temporibus eius odit architecto soluta laboriosam quidem! Hic ipsum eveniet, soluta ullam mollitia quis sed perferendis nulla amet non maiores ad molestiae explicabo distinctio, doloribus, fugit iste illo! Officia id libero placeat facere voluptatem laborum nam? Perferendis doloremque ipsa, dolores officiis velit tempora temporibus. Placeat incidunt quae eveniet autem deserunt, atque culpa repellat itaque. Aspernatur odio alias eum asperiores, saepe temporibus libero ratione? Magnam, nihil atque pariatur adipisci ex repellendus ipsum magni vitae. Cumque dolorum alias similique dolores aliquid, perspiciatis fuga maxime vel, ea fugit voluptatibus dolorem modi nihil neque, accusamus officiis enim nulla magnam? Quidem molestias magni mollitia minima, corrupti modi blanditiis quisquam iste cumque dicta aspernatur obcaecati, voluptatum ab cupiditate, eveniet eligendi. Dolore distinctio ea quo delectus repellendus, fugiat dolores eius unde voluptas exercitationem nulla saepe nemo esse recusandae fuga provident, a voluptatum tempore perspiciatis tenetur aliquid? Corrupti repellendus, exercitationem consequuntur dolorem a voluptas earum dolor nam ipsa dolorum asperiores voluptatum sint magnam inventore harum! Rerum tempora quos est mollitia suscipit rem modi, corrupti quis earum facilis? Eligendi magnam sunt modi praesentium aspernatur, natus accusantium ex expedita nobis ullam odit fuga perspiciatis nisi corporis iste minus rerum error id atque quidem quod ut illo possimus? Incidunt possimus voluptatem dignissimos nihil accusantium, labore fuga debitis delectus odio nobis placeat, iste, minima soluta? Voluptatibus quas odio cum voluptates minima. Nihil pariatur quam voluptates, eos quod rem vel earum nemo, laboriosam libero molestiae consequuntur reprehenderit neque alias debitis id. Nam quas sint ducimus incidunt! Nostrum fugiat voluptatibus tempore labore libero nam cum esse quasi itaque ratione laboriosam, ad quas, magni dolor ullam ipsa adipisci vitae tempora explicabo assumenda culpa. Beatae illum, voluptate culpa voluptas commodi ex reprehenderit vel omnis delectus dolore rerum veritatis, id natus saepe corrupti. Quisquam eius accusamus, ipsum laudantium quasi nihil quas assumenda quia sequi qui totam, facilis necessitatibus officiis impedit omnis dolore iusto cum quibusdam libero, animi suscipit mollitia fugit? At, quae impedit dolorem maxime eveniet quasi provident totam, ea culpa reprehenderit odio sequi minima sed cupiditate dolorum vero ut doloribus officia voluptatem. Eveniet perferendis nisi harum maxime rem placeat fugiat eos voluptates, sunt iure, corporis architecto libero a tempora labore ea cumque vel quae similique. Aliquam eum nostrum facilis vel quaerat neque modi, dolorum iusto veniam, aspernatur ex? Ex aperiam deleniti fuga maiores perferendis temporibus quibusdam autem aspernatur similique?</p></section>
      </main>
      <footer id="resources"></footer>
    </>
  );
}

export default App;
