import React, { useState } from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import workshopImage from "../images/iosconfsg-workshop.jpg"
import confImage from "../images/iosconf-team.jpeg"
import sponsorDeck from "../downloads/sponsors-deck.pdf";
import {
  BrowserView,
  MobileView
} from "react-device-detect";
import SpeakerBioModal from "./speakers/SpeakerBioModal";
import SpeakerBioItem from "./speakers/SpeakerBioItem";
import { Transition } from "@headlessui/react";
import { Helmet } from "react-helmet"

import logoOozou from "../images/logo-oozu.svg"
import logoGuardsquare from "../images/logo-guardsquare.jpg"
import logoSeagroup from "../images/logo-seagroup.png"
import logoSpdigital from "../images/logo-spdigital.svg"

const speakers = [
  {
    "name": "Paul Hudson",
    "company": "hackingwithswift.com",
    "imageUrl": "../speakers/paul.jpg",
    "companyUrl": "https://www.hackingwithswift.com/",
    "twitter": "twostraws",
    "linkedin": "",
    "bio": "Paul is the author of Hacking with Swift, Pro Swift, Swift Design Patterns, Server-Side Swift, Hacking with macOS, Hacking with watchOS, Hacking with tvOS, Swift Coding Challenges, and more. Suffice it to say, he quite likes Swift. And coffee. (But mostly Swift.) (And coffee.)"
  },
  {
    "name": "Mugunth Kumar",
    "company": "xero.com",
    "imageUrl": "../speakers/mugunth.jpg",
    "companyUrl": "https://www.xero.com",
    "twitter": "mugunthkumar",
    "linkedin": "",
    "bio": "Dad first, iOS next. Co-author: iOS Programming Pushing the Limits. Wrote MKStoreKit, MKNetworkKit. Conf Speaker: Bluetooth SIG, iOS Conf SG, try! Swift."
  },
  {
    "name": "Ben Scheirman",
    "company": "nsscreencast.com",
    "imageUrl": "../speakers/ben.jpg",
    "companyUrl": "https://nsscreencast.com",
    "twitter": "subdigital",
    "linkedin": "",
    "bio": "Ben is an iOS, Mac, and Ruby on Rails developer from Houston, Texas. Under his company, Fickle Bits, he builds apps for clients ranging from startups to established companies from multiple industries. He also runs NSScreencast.com, a site with over 400 videos on app development. When not writing software, Ben is probably playing board games with his 5 children, playing guitar, or making award-winning Texas BBQ."
  }
]

function IndexPage () {
  const [showBio, setShowBio] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  const handleShowBio = (speaker) => {
    setSelectedSpeaker(speaker)
    setShowBio(!showBio)
  }
  const handleCloseBio = () => setShowBio(false)

  return (
    <Layout>
      <Helmet>
        <script key="tito" src='https://js.tito.io/v1' async></script>
      </Helmet>
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
            <a href="#ticket" className="bg-orange-500 w-1/3 text-center hover:bg-orange-600 text-white mt-2 px-4 py-2 border-gray-400 rounded shadow">Buy Tickets</a>
          </div>
        </BrowserView>

        <MobileView>
          <div className="flex flex-col max-w-4xl pl-4 py-6">
            <h1 className="text-3xl text-orange-500">iOS Conf SG - 2021</h1>
            <h2 className="text-white text-m">Virtual Edition</h2>
            <h3 className="text-white text-xs mb-0">Workshops - 18th and 19th January</h3>
            <h3 className="text-white text-xs mt-0">Conference - 21st and 22nd January</h3>
            <a href="#ticket" className="bg-orange-500 w-1/3 text-center hover:bg-orange-600 text-white mt-2 px-4 py-2 border-gray-400 rounded shadow">Buy Tickets</a>
          </div>
        </MobileView>
      </section>
      <section className="w-full">
        <div className="flex flex-col flex-no-wrap md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="flex items-center flex-col bg-gray-500 bg-cover bg-bottom" style={{ backgroundImage: `url(${workshopImage})`, backgroundBlendMode: "multiply", height: "60vh" }}>
              <div className="text-center text-white my-auto">
                <h1 className="text-4xl">Workshops</h1>
                <p>Hands-on experience with the latest tools and iOS APIs.</p>
              </div>
            </div>
          </div>
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
      <section id="ticket" className="w-full py-24 bg-gray-100">
        <div className="text-center w-full">
          <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
            Tickets
          </h2>
          <h3>Early Bird tickets are available until <strong>15th December!</strong></h3>
          <h4>--- Earlybird Price ---</h4>
          <h4>Early Bird Conf Only - S$60</h4>
          <h4>Early Bird Bundle (Conference + Workshop) - S$210</h4>
          <h4>--- Regular Price ---</h4>
          <h4>Regular Conf Only - S$120</h4>
          <h4>Regular Bundle (Conference + Workshop) - S$320</h4>
          <br></br>
          <h4>--- Workshop Topics ---</h4>
          <h4>Monday, 18 Jan 2021, 9 AM - 2 PM SGT - Workshop on Combine by Daniel Steinberg</h4>
          <h4>Tuesday, 19 Jan 2021, 1 PM - 6 PM SGT - Modern Swift Development by Vincent Pradeilles</h4>
        </div>
        <tito-widget event="iosconfsg/2021"></tito-widget>
      </section>   
      <section className="w-full py-24">
        <div className="flex flex-col md:flex-row lg:mx-auto justify-center max-w-4xl md:mx-8">
          <h2 className="w-full md:w-1/3 my-auto text-3xl text-orange-600 text-center md:text-left mb-8">
            Gold Sponsors
          </h2>
          <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-center">
            <a href="https://www.seagroup.com/" target="_blank" rel="noreferrer"><img className="h-24 my-4 ml-0 mr-8 object-contain flex-grow-0" src={logoSeagroup} alt="SEA Group" /></a>
            <a href="https://oozou.com/" target="_blank" rel="noreferrer"><img className="h-24 my-4 ml-8 mr-16 object-contain" src={logoOozou} alt="Oozou" /></a>
            <a href="https://www.spdigital.io/" target="_blank" rel="noreferrer"><img className="h-24 my-4 mx-0" src={logoSpdigital} alt="SPDigital" /></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row lg:mx-auto justify-center max-w-4xl md:mx-8 mt-12 mb-8">
          <h2 className="w-full md:w-1/3 my-auto text-3xl text-orange-600 text-center md:text-left mb-8">
            Silver Sponsors
          </h2>
          <div className="w-full md:w-2/3 flex flex-col md:flex-row justify-center">
            <a href="https://www.guardsquare.com/" target="_blank" rel="noreferrer"><img className="h-12 my-4 mx-8 object-contain" src={logoGuardsquare} alt="Guardsquare" /></a>
          </div>
        </div>
        <div className="w-full">
          <p className="mb-12 mx-auto text-center">
            If you&apos;d like to support and engage our iOS community, please <a href="mailto:subh@iosconf.sg" className="text-orange-500">contact us</a> for more information. Thank you!
          </p>
          <p className="mb-12 mx-auto text-center">
            <a href={sponsorDeck} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 border-gray-400 rounded shadow">Download Sponsorship Deck</a>
          </p>
        </div>
      </section>
      <section className="w-full text-center py-24 bg-gray-100">
        <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
          Speakers
        </h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <ul className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {
              speakers.map((speaker, index) => {
                return (
                  <li key={index}>
                    <SpeakerBioItem handleClick={() => handleShowBio(speaker)} speaker={speaker} />
                  </li>
                )
              })
            }
          </ul>
          <br></br>
          <h3>More speakers to be announced soon...</h3>
        </div>
        <Transition show={showBio} appear={true} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <SpeakerBioModal speaker={selectedSpeaker} handleClose={handleCloseBio} />
        </Transition>
      </section>
    </Layout >
  );
}

export default IndexPage;
