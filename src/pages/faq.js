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
                        className="text-base leading-6 text-gray-700"
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
      "SwiftUI and Combine are two big announcements by Apple this year. We&apos;ll have some talks related to practical applications of these technologies. However, the main focus of the conference is still to provide tools and techniques to iOS developers that they can use to build mobile applications with the highest quality.<br />We try not to keep too many beginner talks and emphasize more on knowledge sharing based on the expertise of the speakers.",
  },
  {
    id: 2,
    question: "What is the best way to reach to the conference venue?",
    answer: "Tba",
  },
  {
    id: 3,
    question: "What do I get for each conference ticket?",
    answer:
      "Access to the two-day conference and includes breakfasts, lunches and refreshments.\nWe also have swag such as T-Shirt (and more), and the After Party on 18th Jan (Saturday evening at 6:30 pm).\n\n* Do note that you have to be of legal drinking age to attend the After Party.",
  },
  {
    id: 4,
    question: "Can I buy one day ticket (i.e. for 17th Jan or 18th Jan only)?",
    answer:
      "Sorry, we do not sell one-day tickets because of logistical challenges.",
  },
  {
    id: 5,
    question: "Why are workshop tickets sold separately?",
    answer: "Tba",
  },
  {
    id: 6,
    question:
      "I am a student and want to attend the conference but I cannot afford to buy a ticket. Are there any tickets for students?",
    answer:
      "This year we don't have any special student discount. However, we have a group discount when 3 or more tickets are purchased together. Kindly contact us to know more.",
  },
  {
    id: 7,
    question: "What is the cancellation and refund policy?",
    answer:
      "We do not allow cancellation of tickets for iOS Conf SG. However, you can transfer your ticket to someone else if you are not able to attend the conference. Kindly contact the organizers who can help you with this.",
  },
  {
    id: 8,
    question: "When can I find the complete list of talks?",
    answer:
      "The agenda will be updated on our website closer to the date. You are encouraged to register early to get super early-bird and early-bird discounts.",
  },
  {
    id: 9,
    question: "Is there a group discount?",
    answer: "Drop us an email for the group discount.",
  },
  {
    id: 10,
    question: "What are the sponsorship opportunities?",
    answer:
      'We are looking for sponsors! Email <a  href="mailto:subh&#64;iosconf.sg">Subh</a> if you are interested.',
  },
];
