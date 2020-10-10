import React from "react";
import Layout from "../components/layout";

function FaqPage() {
  return (
    <Layout>
      <section className="w-full">
        <div className="bg-orange-500">
          <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
            <h2 className="text-3xl leading-9 font-bold text-white sm:text-4xl sm:leading-10">
              Frequently asked questions
            </h2>
          </div>
        </div>
        <div className="bg-white">
          <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <dl>
              {data.map((item) => (
                <React.Fragment key={item.id}>
                  <div className="mt-8 border-t-2 border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8">
                    <dt className="text-base leading-6 font-medium text-purple-700 md:col-span-5">
                      {item.question}
                    </dt>
                    <dd className="mt-2 md:mt-0 md:col-span-7">
                      <p
                        className="text-base leading-6 text-gray-700 m-0"
                        dangerouslySetInnerHTML={{ __html: item.answer }}
                      />
                    </dd>
                  </div>
                </React.Fragment>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default FaqPage;

const data = [
  {
    id: 1,
    question: "What is the focus of iOS Conf SG - 2021?",
    answer:
      "SwiftUI has matured this year. We also have new ways to engage our users through App Clips and Widgets.<br/><br/>We will have some talks related to practical applications of these technologies.<br/><br/>However, the main focus of the conference is still to provide tools and techniques to iOS developers that they can use to build mobile applications with the highest quality.<br/><br/>We try not to keep too many beginner talks and emphasize more on knowledge sharing based on the expertise of the speakers.",
  },
  {
    id: 2,
    question: "Where will the conference be held?",
    answer: "iOS Conf SG - 2021 will be a virtual conference that you can attend online in the comfort of your home.<br/><br/>All you need is a good Internet connection and a Mac / iPad that has zoom installed on it.",
  },
  {
    id: 3,
    question: "What are the technical setups I need to do?",
    answer:
      "For the workshops: You need to have the latest version of Xcode installed on your Mac.<br/><br/>For both the workshop and the conference sessions, you need to have access to a good Internet connection, have Zoom and Slack installed on your devices.",
  },
  {
    id: 4,
    question: "What am I entitled to get? ",
    answer:
      "Bundle ticket holders will have access to all the sessions of workshop, conference, special sponsor workshop and all activities that are part of the event.<br/><br/>Conference ONLY ticket holders will have access to all conference session and a special sponsor workshop. Conference ONLY participants won't have access to the first two days of workshops.<br/><br/>You will also receive the conference t-shirt and swags that we will ship to your address. We will try our best to make those delivered before the conference. But in the current time, we seek your understanding if there is a delay in international shipments.",
  },
  {
    id: 5,
    question: "What is the requirement for the room setup?",
    answer: "<strong>Turn your webcam on</strong><br/>We encourage all participants to turn-on their webcams to get the maximum value out of the conference. Keeping the energy high in a virtual event is extremely important. We will have different games and physical exercises throughout the conference.<br/><br/>By turning on your webcam, you let other participants feed on your energy and vice versa. We promise it will be a mad fun week that you will remember for a long time.<br/><br/><strong>Keep the house neat and clean</strong><br/>Make sure the environment is friendly for other participants who will get to see your live feed. We encourage keeping the background clean.<br/><br/><strong>Have space to move</strong><br/>We will have a few fun exercises to ensure your energy doesn't drop. Hence make sure you have some space to move around the room.<br/><br/><strong>Zoom background</strong><br/>You may use zoom background. But do not use a video background. We will provide an official iOS Conf SG zoom background that you may consider to use.",
  },
  {
    id: 6,
    question:
      "Will there be breaks for snacks/food?",
    answer:
      "As we are only going to have a maximum of 5 hours per day, we will have fewer breaks compared to an actual conference.<br/><br/>e suggest you prepare your food before the event starts or take help of others to arrange your food. We will continue to have social interactions and activities during the breaks that you may not want to miss.<br/><br/>You may consider having cut-fruits, water, smoothies or juices to keep you refilled.<br/><br/>All sessions will start and end on time. So if you need to leave, you will have to miss that part of the event.<br/><br/>Having said that - we would have a few short breaks at regular intervals. ",
  },
  {
    id: 7,
    question: "Can I invite a friend to attend the event with me?",
    answer:
      "We seek your understanding not to share your zoom link with others, especially with a larger group of people. We will only allow one connection per registration.<br/><br/>If you are staying with a friend or your partner wants to attend the event with no additional cost for maximum up to 2 participants, including the main participant.<br/><br/>Again this is out of a good-will, please do not try to bend the rule. If the moderators notice this, we will remove you from the zoom session.",
  },
  {
    id: 8,
    question: "Will I get a refund if I can not attend the event?",
    answer:
      "We have a no-refund policy. You may choose to transfer your registration to a friend or colleague if you are unable to attend the event yourself.",
  },
  {
    id: 9,
    question: "Can I only attend half of the event?",
    answer: "You still have to pay the full amount. If you miss a few sessions, you may watch the session recordings later. However, we strongly encourage you to block your time to attend the entire conference and participate in all activities.<br/><br/>The workshop sessions will not be recorded.",
  },
];
