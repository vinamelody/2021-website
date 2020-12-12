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
      <section className="w-full">
        <div className="flex flex-col max-w-4xl lg:mx-auto justify-center">
          <p>Times below are shown in <strong>your local browsers time zone</strong>.</p>
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-ydivide-gray-200">
              <tbody className="bg-white divide-y divide-x divide-gray-200">
                <tr>
                  <td className="w-1/5 px-6 py-3 whitespace-nowrap">09:00 - 09:30</td>
                  <td className="w-1/3 px-6 py-3 whitespace-nowrap">
                    Conference Opening
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="px-6 py-3 whitespace-nowrap align-top">09:35 - 10:00</td>
                  <td className="px-6 py-3 whitespace-nowrap align-top">
                    <div className="min-w-0 flex flex-1 items-center">
                      <div className="flex-shrink-0">
                        <img className="h-16 w-16 rounded-full" src="../speakers/paul.jpg" />
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col items-left px-4">
                        <h3 className="font-medium text-orange-600 my-0 underline">Paul Hudson</h3>
                        <p className="text-sm text-gray-600">
                          Hacking With Swift
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3 whitespace-nowrap align-top">
                    <div>
                      <h3 className="font-medium text-orange-600 my-0">
                        Global Variable Oriented Programming
                      </h3>
                      <p>
                        In this talk, Paul will walk you through the glorious history of global variables in software development, demonstrate why they aren&quot;t going away any time soon, and even show you how you can use reflection, property wrappers, and Combine to get a little bit of global Variable magic in your UIKit Code.
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-3 whitespace-nowrap">09:35 - 10:00</td>
                  <td className="px-6 py-3 whitespace-nowrap">Designing Your App to be Discoverable</td>
                  <td className="px-6 py-3 whitespace-nowrap">Dave Verwer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SchedulePage
