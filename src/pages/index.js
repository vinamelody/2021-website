import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import tapTapImage from "../images/taptap.png";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`ios`, `ios conference`, `iosConf Singapore`, `ios developer`]}
        title="Home"
      />

      <section className="w-full pattern-triangle">
        <div className="max-w-4xl mx-auto py-1 md:py-8 pl-4 flex flex-no-wrap">
          <div className="w-1/2 py-12">
            <h2 className="inline-block mb-4 font-serif text-2xl md:text-4xl text-black">
                Call for Proposal is now open!
            </h2>
            <p className="md:leading-loose mb-3">
              iOS Conf SG 2021 features workshops and selective talks happening online.{` `}
            </p>
            <p>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 border-gray-400 rounded shadow">Submit a talk now!</button>
            </p>
          </div>
          <div className="w-1/2 pt-12 md:p-0">
            <img
            alt="Bird coding with a Mac"
            className="w-3/4 mx-auto"
            src={tapTapImage}
            />
          </div>
          
        </div>
      </section>

      <section className="text-center bg-gray-100 mt-24">
      <h2 className="inline-block p-3 mb-4 text-3xl text-red-500">
            Sponsors
        </h2>
      </section>
    </Layout>
  );
}

export default IndexPage;
