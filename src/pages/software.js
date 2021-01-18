import React from "react";
import Layout from "../components/layout";

function SoftwarePage () {
  return (
    <Layout>
      <section className="w-full">
        <div className="bg-orange-500">
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
            <h2 className="text-3xl leading-9 font-bold text-white sm:text-4xl sm:leading-10">
              Software
            </h2>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p>The workshop and conference will be held entirely using <a href="https://support.zoom.us/hc/en-us/articles/207373866-Zoom-Installers" target="_blank " rel="noreferrer">Zoom</a>.</p>
            <p>Please install the <a href="https://support.zoom.us/hc/en-us/articles/207373866-Zoom-Installers" target="_blank" rel="noreferrer">Zoom client for Meetings</a> to your Mac. It may take a while to download and install, so please do it ahead of time. After that, please <strong>set your name with the same name as the registered ticket</strong>.</p>
            <p>Check your email from us for the workshop Zoom link. If you registered for the workshops and not getting an email, please message @Subh on <a href="slack://open?team=iosconfsg">iOS Conf SG Slack</a> and we will help you.</p>
            <p>Click the appropriate workshop link in the email. Kindly wait in the waiting room until we can verify your ticket.</p>
            <p className="my-2">
              We sincerely hope that you will have a wonderful learning experience. Please let us know if we could improve something via Slack (#feedback channel)
            </p>
          </div>
        </div>
      </section>
    </Layout >
  );
}

export default SoftwarePage;


