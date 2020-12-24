import React, { useState } from "react"
import PropTypes from "prop-types"

import { Tabs } from "~components"
import { DateTime } from 'luxon'

const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
const SG_TIMEZONE = 'Asia/Singapore'

function formatDate (stringDate) {
  // console.log('localTimezone', localTimezone)
  // console.log('currentTimezone', currentTimezone)
  // const t = DateTime.local()
  // console.log('t.locale', t.locale)
  const dt = DateTime.fromISO(stringDate, { zone: localTimezone })
  return dt.toLocaleString(DateTime.TIME_SIMPLE)
  // if (timezone) {
  //   const rezoned = dt.setZone(timezone)
  //   return rezoned.toLocaleString(DateTime.TIME_SIMPLE)
  // } else {
  //   return dt.toLocaleString(DateTime.TIME_SIMPLE)
  // }

}

function ScheduleTable (props) {
  const { schedule } = props
  const [currentTab, setCurrentTab] = useState()

  const [currentTimezone, setCurrentTimezone] = useState(localTimezone)

  const selectedTab = (tab) => {
    setCurrentTab(tab)
    console.log('currentTab', currentTab)
  }

  const rerenderInSgTime = () => {
    setCurrentTimezone(SG_TIMEZONE)
  }
  const rerenderInLocalTime = () => {
    setCurrentTimezone(localTimezone)
  }

  return (
    <>
      <Tabs defaultSelected={'22 Jan'} currentTab={selectedTab}>
        <Tabs.Tab labelKey='21 Jan'>21 January</Tabs.Tab>
        <Tabs.Tab labelKey='22 Jan'>22 January</Tabs.Tab>
      </Tabs>
      <p>
        Times below are shown in your local time zone <strong>{localTimezone}</strong>.
            {
          (localTimezone !== SG_TIMEZONE && currentTimezone !== SG_TIMEZONE) && <a href='#' onClick={rerenderInSgTime}> Show in Singapore time</a>
        }
        {
          (currentTimezone === SG_TIMEZONE && localTimezone !== SG_TIMEZONE) && <a href='#' onClick={rerenderInLocalTime}> Show in my local time</a>
        }
      </p>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-ydivide-gray-200">
          <tbody className="bg-white divide-y divide-x divide-gray-200">
            {
              schedule.map((talk, index) => {
                if (talk.speaker_name === "Organiser") {
                  return (
                    <tr key={index}>
                      <td className="w-1/5 px-6 py-3 whitespace-nowrap">{formatDate(talk.start_at)} - {formatDate(talk.end_at)}</td>
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
    </>
  )

}

ScheduleTable.propTypes = {
  schedule: PropTypes.arrayOf(PropTypes.object)
}
export default ScheduleTable
