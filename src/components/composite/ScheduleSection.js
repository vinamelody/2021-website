import React, { useState } from "react"

import { Tabs, ScheduleTable } from "~components"
import { DateTime } from 'luxon'

import { ScheduleData } from "~data"

const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone
const SG_TIMEZONE = 'Asia/Singapore'

function formatDate (stringDate, timezone) {
  if (timezone) {
    const rezoned = DateTime.fromISO(stringDate, { zone: timezone })
    return rezoned.toLocaleString(DateTime.TIME_SIMPLE)
  } else {
    const dt = DateTime.fromISO(stringDate, { zone: localTimezone })
    return dt.toLocaleString(DateTime.TIME_SIMPLE)
  }
}
const Schedule18 = ScheduleData.filter(event => event.activity === "iosconfsg21.workshop1")
const Schedule19 = ScheduleData.filter(event => event.activity === "iosconfsg21.workshop2")
const Conference21 = ScheduleData.filter(event => event.activity === "iosconfsg21.day1")
const Conference22 = ScheduleData.filter(event => event.activity === "iosconfsg21.day2")
const sgSchedule18 = rezoneSchedule(Schedule18, SG_TIMEZONE)
const sgSchedule19 = rezoneSchedule(Schedule19, SG_TIMEZONE)
const sgSchedule21 = rezoneSchedule(Conference21, SG_TIMEZONE)
const sgSchedule22 = rezoneSchedule(Conference22, SG_TIMEZONE)

const schedule = {
  others: {
    iosconfsg21: {
      day1: rezoneSchedule(Conference21, localTimezone),
      day2: rezoneSchedule(Conference22, localTimezone),
      workshop1: rezoneSchedule(Schedule18, localTimezone),
      workshop2: rezoneSchedule(Schedule19, localTimezone)
    },
  },
  sg: {
    iosconfsg21: {
      day1: sgSchedule21,
      day2: sgSchedule22,
      workshop1: sgSchedule18,
      workshop2: sgSchedule19
    },
  },
}

function rezoneSchedule (schedule, timezone) {
  const rezoned = schedule.map(item => {
    return {
      ...item,
      start_at: formatDate(item.start_at, timezone),
      end_at: formatDate(item.end_at, timezone)
    }
  })
  return rezoned
}

function selectScheduleForTab (currentTab, timezone) {
  const location = timezone === SG_TIMEZONE ? 'sg' : 'others'
  return schedule[location].iosconfsg21[currentTab]
}

function ScheduleSection () {
  const [currentTab, setCurrentTab] = useState('day1')

  const [currentTimezone, setCurrentTimezone] = useState(localTimezone)
  const localSchedule = selectScheduleForTab(currentTab, currentTimezone)

  const selectedTab = (tab) => {
    setCurrentTab(tab)
  }

  const rerenderInSgTime = () => {
    setCurrentTimezone(SG_TIMEZONE)
    // setCurrentSchedule(sgScheduleForTab(currentTab))
  }
  const rerenderInLocalTime = () => {
    setCurrentTimezone(localTimezone)
  }

  return (
    <>
      <Tabs defaultSelected={'day1'} currentTab={selectedTab}>
        <Tabs.Tab labelKey='workshop1'>18 January</Tabs.Tab>
        <Tabs.Tab labelKey='workshop2'>19 January</Tabs.Tab>
        <Tabs.Tab labelKey='day1'>21 January</Tabs.Tab>
        <Tabs.Tab labelKey='day2'>22 January</Tabs.Tab>
      </Tabs>
      <p className="text-sm mx-4 sm:mx-0">
        Times below are shown in your local time zone <strong>{localTimezone}</strong>.
            {
          (localTimezone !== SG_TIMEZONE && currentTimezone !== SG_TIMEZONE) && <a href='#' onClick={rerenderInSgTime}> Show in Singapore time</a>
        }
        {
          (currentTimezone === SG_TIMEZONE && localTimezone !== SG_TIMEZONE) && <a href='#' onClick={rerenderInLocalTime}> Show in my local time</a>
        }
      </p>
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <ScheduleTable schedule={localSchedule} tab={currentTab} />
      </div>
      <p className="text-sm mx-4 sm:mx-0">Schedule may change without prior notice</p>
    </>
  )

}

export default ScheduleSection
