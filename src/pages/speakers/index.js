import React, { useState } from "react"
import Layout from "../../components/layout"
import SpeakerBioModal from "./SpeakerBioModal"
import SpeakerBioItem from "./SpeakerBioItem"
import { Transition } from "@headlessui/react"

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

function SpeakersPage () {
  const [showBio, setShowBio] = useState(false)
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  const handleShowBio = (speaker) => {
    setSelectedSpeaker(speaker)
    setShowBio(!showBio)
  }
  const handleCloseBio = () => setShowBio(false)

  return (
    <Layout>
      <section className="w-full">
        <div className="bg-orange-500">
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
            <h2 className="text-3xl leading-9 font-bold text-white sm:text-4xl sm:leading-10">
              Speakers
            </h2>
          </div>
        </div>
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
        </div>
        <Transition show={showBio} appear={true} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <SpeakerBioModal speaker={selectedSpeaker} handleClose={handleCloseBio} />
        </Transition>
      </section>
    </Layout >
  )
}

export default SpeakersPage
