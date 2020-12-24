import React, { useState } from "react"
import Layout from "~components/layout"
import { PageTitleSection, Tabs } from "~components"
import { ScheduleData } from "~data"

// const tabItems = [
//   {
//     id: '1',
//     title: '21 January',
//     value: '21Jan'
//   },
//   {
//     id: '2',
//     title: '22 January',
//     value: '22Jan'
//   }
// ]


// const schedule = [
//   {
//     "title": "Check-in 📝",
//     "start_at": "2019-01-17T08:00:00+0800",
//     "end_at": "2019-01-17T09:00:00+0800",
//     "speaker_id": "",
//     "talk_description": "Are you excited to level yourself up!? To speed up registration process, please prepare the QR Code which you can find in your ticket. We welcome your feedback through out the conference! Just tap Feedback button on each session.",
//     "icon_filename": "registration",
//   }
// ]


function SchedulePage () {

  const [currentTab, setCurrentTab] = useState()

  const selectedTab = (tab) => {
    setCurrentTab(tab)
    console.log('currentTab', currentTab)
  }


  return (
    <Layout>
      <PageTitleSection title="Schedule" />
      <section className="w-full">
        <div className="w-full text-center">
          <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">Conference</h2>
        </div>
      </section>
      <section className="w-full px-4 mb-15">
        <div className="flex flex-col max-w-4xl lg:mx-auto justify-center">
          <Tabs defaultSelected={'22 Jan'} currentTab={selectedTab}>
            <Tabs.Tab labelKey='21 Jan'>21 January</Tabs.Tab>
            <Tabs.Tab labelKey='22 Jan'>22 January</Tabs.Tab>
          </Tabs>
          <p>Times below are shown in <strong>your local browsers time zone</strong>.</p>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-ydivide-gray-200">
              <tbody className="bg-white divide-y divide-x divide-gray-200">
                {
                  ScheduleData.map((talk, index) => {
                    if (talk.speaker_name === "Organiser") {
                      return (
                        <tr key={index}>
                          <td className="w-1/5 px-6 py-3 whitespace-nowrap">{talk.start_at} - {talk.end_at}</td>
                          <td className="w-1/3 px-6 py-3 whitespace-nowrap">{talk.title}</td>
                          <td></td>
                        </tr>
                      )
                    } else {
                      return (
                        <tr key={index}>
                          <td className="px-6 py-3 whitespace-nowrap align-top">{talk.start_at} - {talk.end_at}</td>
                          <td className="px-6 py-3 whitespace-nowrap align-top">
                            <div className="min-w-0 flex flex-1 items-center">
                              <div className="flex-shrink-0">
                                <img className="h-16 w-16 rounded-full" src={`../speakers/${talk.speaker_image}.jpg`} />
                              </div>
                              <div className="min-w-0 flex-1 flex flex-col items-left px-4">
                                <h3 className="font-medium text-orange-600 my-0 underline">{talk.speaker_name}</h3>
                                <p className="text-sm text-gray-600">{talk.speaker_company}</p>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-3 whitespace-nowrap align-top">
                            <div>
                              <h3 className="font-medium text-orange-600 my-0">{talk.title}</h3>
                              <p>{talk.talk_description}</p>
                            </div>
                          </td>
                        </tr>
                      )
                    }
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </section >
    </Layout >
  )
}

export default SchedulePage
