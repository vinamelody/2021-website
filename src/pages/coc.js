import React from "react";
import Layout from "../components/layout";

function CodeOfConductPage() {
  return (
    <Layout>
      <section className="w-full">
        <div className="bg-orange-500">
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
            <h2 className="text-3xl leading-9 font-bold text-white sm:text-4xl sm:leading-10">
              Code of Conduct
            </h2>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <p>
              This “Don’t be a jerk” policy is a shortened, more casual version
              of the longer Code of Conduct policy.{" "}
              <a
                href="http://meta.wikimedia.org/wiki/Don%27t_be_a_dick"
                target="_blank"
                rel="noreferrer"
              >
                Read full version
              </a>
              .
            </p>
            <p>
              iOS Conf SG prides itself on being an open, respectful, and
              inclusive community. That means jerky behavior isn’t allowed at
              any iOS Conf SG events (including after-parties). Because we know
              that it’s not obvious to everyone, here’s a reminder of the things
              we don’t allow: jokes or offensive comments about
              sex/sexuality/race/religion/nationality/body size, showing porn in
              public, touching people uninvited, or continuing to interact with
              someone after they’ve asked you to stop. Continuous jerky behavior
              may result in getting expelled from the conference.
            </p>
            <p>
              If someone is bothering you, please tell iOS Conf SG Organizers
              immediately and they will take care of it. We want to maintain iOS
              Conf SG’s awesomeness.
            </p>
            <h3>Contacts:</h3>
            <ul>
              <li>
                Subhransu Behera, +65 8388 7595,{" "}
                <a href="mailto:subh&#64;iosconf.sg">subh@iosconf.sg</a>
              </li>
              <li>
                Melvin Tan, +65 9337 9909,{" "}
                <a href="mailto:melvin&#64;me.com">melvin.tan@me.com</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default CodeOfConductPage;
