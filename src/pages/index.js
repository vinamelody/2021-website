import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
// import tapTapImage from "../images/taptap.png";
// import birdImage from "../images/iosconf-bird.png";
// import headerImage from "../images/iosconfsg-header.jpg";
import workshopImage from "../images/iosconfsg-workshop.jpg"
import confImage from "../images/iosconf-team.jpeg"
import sponsorDeck from "../downloads/sponsors-deck.pdf";
import {
  BrowserView,
  MobileView
} from "react-device-detect";

function IndexPage () {
  return (
    <Layout>
      <SEO
        keywords={[`ios`, `ios conference`, `iosConf Singapore`, `ios developer`]}
        title="Home"
      />

      <section className="w-full bg-hero bg-cover bg-center">
        <BrowserView>
          <div className="flex flex-col max-w-4xl mx-auto pl-4 py-24">
            <h1 className="text-4xl text-orange-500">iOS Conf SG - 2021</h1>
            <h2 className="text-white text-xl">Virtual Edition</h2>
            <h3 className="text-white text-xl mb-0">Workshops - 18th and 19th January</h3>
            <h3 className="text-white text-xl mt-0">Conference - 21st and 22nd January</h3>
            <a href='https://ti.to/iosconfsg/2021' target='_blank' rel='noreferrer' className="bg-orange-500 w-1/3 text-center hover:bg-orange-600 text-white mt-2 px-4 py-2 border-gray-400 rounded shadow">Buy Tickets</a>
          </div>
        </BrowserView>

        <MobileView>
          <div className="flex flex-col max-w-4xl pl-4 py-6">
            <h1 className="text-3xl text-orange-500">iOS Conf SG - 2021</h1>
            <h2 className="text-white text-m">Virtual Edition</h2>
            <h3 className="text-white text-xs mb-0">Workshops - 18th and 19th January</h3>
            <h3 className="text-white text-xs mt-0">Conference - 21st and 22nd January</h3>
            <a href='https://ti.to/iosconfsg/2021' target='_blank' rel='noreferrer' className="bg-orange-500 w-1/3 text-center hover:bg-orange-600 text-white mt-2 px-4 py-2 border-gray-400 rounded shadow">Buy Tickets</a>
          </div>
        </MobileView>
      </section>

      <section className="w-full">
        <div className="flex flex-col flex-no-wrap md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex items-center flex-col bg-gray-500 bg-cover bg-bottom" style={{ backgroundImage: `url(${workshopImage})`, backgroundBlendMode: "multiply", height: "60vh" }}>
              <div className="text-center text-white my-auto">
                <h1 className="text-4xl">Workshops</h1>
                <p>Hands-on experience on latest tools and iOS APIs.</p>
              </div>
            </div>
          </div>
          {/* <img className="object-cover w-1/2" src={workshopImage}/> */}
          {/* <img className="object-cover w-1/2" src={confImage}/> */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center flex-col bg-gray-500 bg-cover bg-top h-0" style={{ backgroundImage: `url(${confImage})`, backgroundBlendMode: "multiply", height: "60vh" }}>
              <div className="text-center text-white my-auto">
                <h1 className="text-4xl">Conference</h1>
                <p>Native iOS and Swift programming talks.</p>
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
    </Layout >
  );
}

export default IndexPage;
