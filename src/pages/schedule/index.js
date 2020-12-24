import React from "react"
import Layout from "~components/layout"
import { PageTitleSection, ScheduleTable } from "~components"
import { ScheduleData } from "~data"

// const Schedule18 = ScheduleData.filter(event => event.activity === "iosconfsg21.workshop1")
// console.log('Schedule 18th Jan', Schedule18)
// const Schedule19 = ScheduleData.filter(event => event.activity === "iosconfsg21.workshop2")

// const Conference21 = ScheduleData.filter(event => event.activity === "iosconfsg21.day1")

// const Conference22 = ScheduleData.filter(event => event.activity === "iosconfsg21.day2")

function SchedulePage () {
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
          <ScheduleTable schedule={ScheduleData} />
        </div>
      </section>
    </Layout>
  )
}

export default SchedulePage
