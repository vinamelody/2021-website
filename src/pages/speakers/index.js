import React, { useState } from "react"
import Layout from "../../components/layout"
import SpeakerBioModal from "./SpeakerBioModal"
import SpeakerBioItem from "./SpeakerBioItem"
import { Transition } from "@headlessui/react"
import { SpeakersData, TrainersData } from "~data"

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
      </section>
      <section>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <ul className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl">
            {
              SpeakersData.map((speaker, index) => {
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
      <section className="w-full">
        <div className="bg-orange-500">
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
            <h2 className="text-3xl leading-9 font-bold text-white sm:text-4xl sm:leading-10">
              Workshops Trainers
            </h2>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 my-6">
          <ul className="mx-auto sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-2 lg:max-w-5xl">
            {
              TrainersData.map((speaker, index) => {
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
