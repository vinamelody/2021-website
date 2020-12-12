import React from "react"
import Layout from "~components/layout"
import { PageTitleSection } from "~components"

function SchedulePage () {


  return (
    <Layout>
      <PageTitleSection title="Schedule" />
      <section className="w-full">
        <div className="w-full text-center">
          <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">Conference</h2>
        </div>
      </section>
    </Layout>
  )
}

export default SchedulePage
