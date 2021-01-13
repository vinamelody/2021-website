import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import iOSBird from "../images/iosconf-bird.png";

function NotFoundPage () {
  return (
    <Layout>
      <SEO title="404: Not found" />
      <section className="w-full">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
          <img
            alt="iOS Conference Singapore bird in front of Marina Bay Sands"
            className="block mx-auto w-1/2"
            src={iOSBird}
          />
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 className="bg-orange-400 text-2xl font-normal text-center inline-block my-8 p-3">
              We cannot find that page you want but looks like this page is where our bird is hiding!
            </h2>
          </div>
        </div>
      </section>

    </Layout>
  );
}

export default NotFoundPage;
