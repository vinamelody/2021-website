import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons/faFacebookF";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faSlackHash } from "@fortawesome/free-brands-svg-icons/faSlackHash";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function Footer () {
    return (
        <>
            <section className="bg-orange-600">
                <div className="max-w-4xl mx-auto text-white text-left text-center">
                    <ul className="list-none my-4">
                        <li className="inline-block mr-4"><Link className="text-white" to="https://www.facebook.com/iosconfsg/"><FontAwesomeIcon size="2x" icon={faFacebookF} /></Link></li>
                        <li className="inline-block mr-4"><Link className="text-white" to="https://www.twitter.com/iosconfsg/"><FontAwesomeIcon size="2x" icon={faTwitter} /></Link></li>
                        <li className="inline-block mr-4"><Link className="text-white" to="https://launchpass.com/iosconfsg"><FontAwesomeIcon size="2x" icon={faSlackHash} /></Link></li>
                    </ul>
                </div>
            </section>
            <footer className="bg-gray-800 pattern">
                <div className="max-w-4xl mx-auto mt-8">
                    <ul className="list-none text-sm text-white md:mx-auto p-4 md:px-8">
                        <li className="inline-block mr-4 mb-2"><Link className="underline" to='/coc'>Code of Conduct</Link></li>
                        <li className="inline-block mr-4 mb-2"><a className="underline" href='mailto:subh@iosconf.sg'>Contact: subh@iosconf.sg</a></li>
                        <li className="inline-block mr-4 mb-2"><Link className="underline" to='https://www.meetup.com/Singapore-iOS-Dev-Scout-Meetup/'>iOS Dev Scout</Link></li>
                        <li className="inline-block mr-4 mb-2"><Link className="underline" to='https://cu.sg/'>CU Society</Link></li>
                        <li className="inline-block mr-4 mb-2"><Link className="underline" to='/faq'>Frequently Asked Questions</Link></li>
                    </ul>
                </div>
                <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
                    <p className="text-white">
                        Created with {` `}
                        <a
                            className="font-bold no-underline text-purple-300"
                            href="https://www.gatsbyjs.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Gatsby JS
                </a>
                        {` `} using {` `}
                        <a
                            className="font-bold no-underline text-teal-200"
                            href="https://tailwindcss.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Tailwind CSS
                </a>
                        {` `} and hosted on {` `}
                        <a
                            className="font-bold no-underline text-blue-400"
                            href="https://www.netlify.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Netlify
                </a>
                👩🏻‍💻
            </p>

                    <p>
                        <a
                            className="font-bold text-white no-underline"
                            href="https://github.com/iosconfsg"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FontAwesomeIcon size="2x" icon={faGithub} />
                        </a>
                    </p>
                </nav>
            </footer>
        </>
    )
}

export default Footer;
