import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import tapTapImage from "../images/taptap.png";
import birdImage from "../images/iosconf-bird.png";
import workshopImage from "../images/iosconfsg-workshop.jpg"
import confImage from "../images/iosconf-team.jpeg"
import sponsorDeck from "../downloads/sponsors-deck.pdf";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`ios`, `ios conference`, `iosConf Singapore`, `ios developer`]}
        title="Home"
      />

      <section className="w-full pattern-triangle">
        <div className="max-w-4xl mx-auto py-1 md:py-8 pl-4 flex flex-no-wrap">
          <div className="w-1/2 py-12">
            <h2 className="inline-block mb-4 font-serif text-2xl md:text-4xl text-black">
              Call for Proposal is now open!
            </h2>
            <p className="md:leading-loose mb-3">
              iOS Conf SG 2021 features workshops and selective talks happening online.{` `}
            </p>
            <p>
              <a href="https://www.papercall.io/iosconfsg2021" className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 border-gray-400 rounded shadow">Submit a talk now!</a>
            </p>
          </div>
          <div className="w-1/2 pt-12 md:p-0">
            <img
              alt="Bird coding with a Mac"
              className="w-3/4 mx-auto"
              src={birdImage}
            />
          </div>

        </div>
      </section>

      <section className="w-full">
        <div className="flex flex-col flex-no-wrap md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex items-center flex-col bg-gray-500 bg-cover bg-bottom" style={{ backgroundImage: `url(${workshopImage})`, backgroundBlendMode: "multiply", height: "60vh" }}>
              <div className="text-center text-white my-auto">
                <h1 className="text-4xl">Workshops</h1>
                <p>Hands-on experience on SwiftUI, Concurrency and Server-Side Swift</p>
              </div>
            </div>
          </div>
          {/* <img className="object-cover w-1/2" src={workshopImage}/> */}
          {/* <img className="object-cover w-1/2" src={confImage}/> */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center flex-col bg-gray-500 bg-cover bg-top h-0" style={{ backgroundImage: `url(${confImage})`, backgroundBlendMode: "multiply", height: "60vh" }}>
              <div className="text-center text-white my-auto">
                <h1 className="text-4xl">Conference</h1>
                <p>2 full days - single-track - conference featuring 20 pure iOS and Swift programming talks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-center bg-gray-100 py-24">
        <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
          Sponsors
        </h2>
        <p className="mb-12">
          If you&apos;d like to support and engage our iOS community, kindly <a href="mailto:subh@iosconf.sg" className="text-orange-500">get in touch</a> with us for more information. Thank you!
        </p>
        <p className="mb-12">
          <a href={sponsorDeck} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 border-gray-400 rounded shadow">Download Sponsorship Deck</a>
        </p>
      </section>
    </Layout>
  );
}

export default IndexPage;
