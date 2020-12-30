import React from "react"
import Layout from "~components/layout"
import { PageTitleSection, ScheduleSection } from "~components"


function SchedulePage () {
  return (
    <Layout>
      <PageTitleSection title="Schedule" />
      <section className="w-full px-4 my-15">
        <div className="flex flex-col max-w-4xl lg:mx-auto justify-center">
          <ScheduleSection />
        </div>
      </section>
    </Layout>
  )
}

export default SchedulePage
