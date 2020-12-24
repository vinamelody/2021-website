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
import { SpeakersData } from "~data"

import logoOozou from "../images/logo-oozu.svg"
import logoGuardsquare from "../images/logo-guardsquare.jpg"
import logoSeagroup from "../images/logo-seagroup.png"
import logoSpdigital from "../images/logo-spdigital.svg"

const workshopSpeakers = [
  {
    "name": "Daniel H Steinberg",
    "company": "Dim Sum Thinking",
    "imageUrl": "../speakers/daniel.jpg",
    "companyUrl": "https://dimsumthinking.com",
    "twitter": "dimsumthinking",
    "linkedin": "",    
    "bio": "Daniel is the author of more than a dozen books including the best selling books A Functional Programming Kickstart, A SwiftUI Kickstart, A Swift Kickstart and Dear Elena. He presents iOS, Functional Programming, SwiftUI, and Swift training and consults through his company Dim Sum Thinking. He has written apps for the iPhone and the iPad since the SDKs first appeared and has written programs for the Mac all the way back to System 7. When he's not coding or talking about coding for the Mac, the iPhone, and the iPad he's probably cooking, baking bread, or hanging out with friends."
  },
  {
    "name": "Vincent Pradeilles",
    "company": "Worldline",
    "imageUrl": "../speakers/vincent.jpg",
    "companyUrl": "https://worldline.com",
    "twitter": "v_pradeilles",
    "linkedin": "",
    "bio": "Vincent is a lead iOS developer, at Worldline, Lyon 🇫🇷 He started doing iOS development back in 2011 and for the last two years he has been working on the iOS apps of major French banks."
  }
]

const speakers = [
  {
    "name": "Paul Hudson",
    "company": "Hacking with Swift",
    "imageUrl": "../speakers/paul.jpg",
    "companyUrl": "https://www.hackingwithswift.com/",
    "twitter": "twostraws",
    "linkedin": "",
    "bio": "Paul is the author of Hacking with Swift, Pro Swift, Swift Design Patterns, Server-Side Swift, Hacking with macOS, Hacking with watchOS, Hacking with tvOS, Swift Coding Challenges, and more. Suffice it to say, he quite likes Swift. And coffee. (But mostly Swift.) (And coffee.)"
  },
  {
    "name": "Peter Steinberger",
    "company": "PSPDFKit",
    "imageUrl": "../speakers/peter.jpg",
    "companyUrl": "https://pspdfkit.com",
    "twitter": "steipete",
    "linkedin": "",
    "bio": "Peter founded and bootstrapped PSPDFKit in 2011, and has since expanded the company with the goal of providing the highest quality PDF framework for all platforms. While Peter is responsible for the day-to-day management of the team, he never misses the chance to go under PSPDFKit’s hood and get his hands dirty with writing and debugging code. Peter has worked with iOS since the inception of the iPhone, and is regularly invited to speak at conferences around the world. He also organizes [Cocoaheads] , a meetup for developers that work with Apple platforms. Prior to PSPDFKit, he worked as a Senior iOS Engineer at a startup in San Francisco and taught iOS and Mac development at his alma mater, the Vienna University of Technology."
  },
  {
    "name": "Ben Scheirman",
    "company": "NSScreencast",
    "imageUrl": "../speakers/ben.jpg",
    "companyUrl": "https://nsscreencast.com",
    "twitter": "subdigital",
    "linkedin": "",
    "bio": "Ben is an iOS, Mac, and Ruby on Rails developer from Houston, Texas. Under his company, Fickle Bits, he builds apps for clients ranging from startups to established companies from multiple industries. He also runs NSScreencast.com, a site with over 400 videos on app development. When not writing software, Ben is probably playing board games with his 5 children, playing guitar, or making award-winning Texas BBQ."
  },

  {
    "name": "Mugunth Kumar",
    "company": "Xero",
    "imageUrl": "../speakers/mugunth.jpg",
    "companyUrl": "https://www.xero.com",
    "twitter": "mugunthkumar",
    "linkedin": "",
    "bio": "Dad first, iOS next. Co-author: iOS Programming Pushing the Limits. Wrote MKStoreKit, MKNetworkKit. Conf Speaker: Bluetooth SIG, iOS Conf SG, try! Swift."
  },
  {
    "name": "Malin Sundberg",
    "company": "Orbit",
    "imageUrl": "../speakers/malin.jpg",
    "companyUrl": "https://timeinorbit.com",
    "twitter": "malinsundberg",
    "linkedin": "",
    "bio": "Malin is an indie developer working on an app called Orbit, and co-founder of Triple Glazed Studios. Being one half of a two-person team, Malin keeps herself busy developing apps and backends (using server-side Swift and Vapor), designing apps, product pages, icons, and other app artwork. Malin is also passionate about the development community and regularly organizes local meetups in Vancouver, Canada. She also chats about tech and indie development on the Cup of Tech podcast."
  },
  {
    "name": "Patrick Balestra",
    "company": "Spotify",
    "imageUrl": "../speakers/patrick.jpg",
    "companyUrl": "https://www.spotify.com",
    "twitter": "BalestraPatrick",
    "linkedin": "",
    "bio": "Patrick is a Senior iOS Engineer at Spotify in Stockholm where he works on build systems and developer experience"
  },  
  {
    "name": "Alexander Repty",
    "company": "Sketch",
    "imageUrl": "../speakers/alexander.jpg",
    "companyUrl": "https://www.sketch.com",
    "twitter": "arepty",
    "linkedin": "",
    "bio": "Alexander is a beteran software engineer from Germany, specialises in creating awesome apps for macOS, iOS, tvOS and watchOS using Swift, Objective-C and all kinds of native Apple frameworks. His work has been featured in Apple TV commercials and on Apple WWDC banners. He has also worked on an Apple Design Award winning app."
  },  
  {
    "name": "Madushan Gamage",
    "company": "Grab",
    "imageUrl": "../speakers/madushan.jpg",
    "companyUrl": "https://www.grab.com/sg",
    "twitter": "itsmadnik",
    "linkedin": "",
    "bio": "Madushan is a lead software engineer at Grab working on the mobile platform team."
  },
  {
    "name": "Roxana Jula",
    "company": "Nodes",
    "imageUrl": "../speakers/roxana.jpg",
    "companyUrl": "https://www.nodesagency.com/",
    "twitter": "roxanajula",
    "linkedin": "",
    "bio": "Roxana is a Romanian mobile developer based in Dubai with a passion for augmented reality. She started coding when she was 13 years old and so far has been part of the development team of over 20 apps including one of the biggest digital public services app in Scandinavia. She is involved in the tech community, both online and offline at local events. As an advocate for women in tech, Roxana is encouraging other girls to join the tech world."
  },  
  {
    "name": "Maciej Piotrowski",
    "company": "Allegro",
    "imageUrl": "../speakers/maciej.jpg",
    "companyUrl": "https://allegro.tech",
    "twitter": "paciej00",
    "linkedin": "",
    "bio": "Maciej is a passionate iOS developer that pays much attention to details and code quality. He likes improving things, always looking for better solutions because he's amazed that in the programming world, issues can be solved in 100s of ways. In 2016 he kicked off with his friends the swifting.io blog, where he has been posting his thoughts about various topics."
  },
  {
    "name": "Rongyan (蓝容) Zheng",
    "company": "Shopee",
    "imageUrl": "../speakers/rongyan.jpg",
    "companyUrl": "https://shopee.sg",
    "twitter": "",
    "linkedin": "in/rongyanzheng",
    "bio": ""
  },  
  {
    "name": "Erick Camacho",
    "company": "Spotify",
    "imageUrl": "../speakers/eric.jpg",
    "companyUrl": "https://www.spotify.com",
    "twitter": "ecamacho",
    "linkedin": "",
    "bio": "Erick works as a Senior iOS infrastructure engineer at Spotify taking care of the iOS developer experience."
  },
  {
    "name": "Benoit Pasquier",
    "company": "ShopBack",
    "imageUrl": "../speakers/benoit.jpg",
    "companyUrl": "https://www.shopback.sg",
    "twitter": "BenoitPasquier_",
    "linkedin": "",
    "bio": "Benoit is a French iOS engineer working at ShopBack, here in Singapore.  He has previously worked on a number of international e-commerce apps in Europe and SouthEast Asia. When not blogging about mobile development and personal growth, he’s outside, discovering the best running routes in Singapore."
  },
  {
    "name": "Jason Nam",
    "company": "OOZOU",
    "imageUrl": "../speakers/jason.jpg",
    "companyUrl": "https://oozou.com/",
    "twitter": "seokhyeoneee",
    "linkedin": "",
    "bio": "Jason is an iOS developer who is passionate about finding better software architecture and improving his development process so that he can deliver the best UX/UI. He enjoys discussing his approaches and other developers' experiences. Besides his interest in software, he also enjoys reading books about history."
  },
  {
    "name": "Kenneth Poon",
    "company": "SPDigital",
    "imageUrl": "../speakers/kenneth.jpg",
    "companyUrl": "https://www.spdigital.io",
    "twitter": "",
    "linkedin": "in/kenneth-poon-84217019",
    "bio": "Kenneth works as a Principal Software Engineer at SPDigital. He is passionate about TDD and BDD. He likes to bring agile software practices into agile development space. He is also a prominent speaker at iOS Dev Scout, especially on iOS topics like Testing and IPA Code Injection. He enjoys running and playing the piano while not thinking about failed tests."
  },    
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
        </div> <br></br>        
        <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
          Workshop Trainers
        </h2>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <ul className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl">
            {
              workshopSpeakers.map((speaker, index) => {
                return (
                  <li key={index}>
                    <SpeakerBioItem handleClick={() => handleShowBio(speaker)} speaker={speaker} />
                  </li>
                )
              })
            }
          </ul>
        </div>
        <Transition show={showBio} appear={true} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <SpeakerBioModal speaker={selectedSpeaker} handleClose={handleCloseBio} />
        </Transition>
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
      <section id="ticket" className="w-full py-24 bg-gray-100">
        <div className="text-center w-full">
          <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
            Tickets
          </h2>
        </div>
        <tito-widget event="iosconfsg/2021"></tito-widget>
        <div className="max-w-4xl lg:mx-auto grid lg:grid-cols-3 lg:gap-x-5 mt-16">
          <div>
            <div className="text-left">
              <span className="inline-flex rounded-full bg-indigo-100 text-indigo-800 px-3">Early Bird Tickets</span>
            </div>
            <p className="text-xl font-semibold text-left">
              Get it while you can!
              </p>
            <p className="text-left">
              Early Bird tickets are available until 15th December 2020. Choose a ticket for both conference plus workshop (S$210) or conference only (S$60).
              </p>
          </div>
          <div>
            <div className="text-left">
              <span className="inline-flex rounded-full bg-pink-100 text-pink-800 px-3">Regular Price</span>
            </div>
            <p className="text-xl font-semibold text-left">
              The first virtual iOS Conf SG!
              </p>
            <p className="text-left">
              From 16th December, the conference plus workshop ticket is S$320. Conference ticket is S$120.
              </p>
          </div>
          <div>
            <div className="text-left">
              <span className="inline-flex rounded-full bg-green-100 text-green-800 px-3">Workshops</span>
            </div>
            <p className="text-xl font-semibold text-left">
              Level up through workshops!
              </p>
            <p className="text-left">
              A workshop on <strong>Combine by Daniel Steinberg</strong> on Monday, 18 Jan 2021, 9 AM - 2 PM SGT. And <strong>Modern Swift Development</strong> by Vincent Pradeilles on Tuesday, 19 Jan 2021, 1 PM - 6 PM SGT.
              </p>
          </div>
        </div>
      </section>            
    </Layout >
  );
}

export default IndexPage;
