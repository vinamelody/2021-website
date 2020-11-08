import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"

function SpeakerBioItem (props) {
  const { handleClick, speaker } = props

  const hasLinkedIn = (speaker && Object.prototype.hasOwnProperty.call(speaker, 'linkedin') && speaker.linkedin !== '')

  return (
    <div className="space-y-6">
      { speaker &&
        <>
          <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={speaker.imageUrl} onClick={handleClick} />
          <div className="space-y-2">
            <div className="flex-col justify-center text-lg leading-6 font-medium space-y-1">
              <h4 className="text-center">{speaker.name}</h4>
              <p className="text-orange-600 text-center"><a href={speaker.companyUrl} target="_blank" rel="noopener noreferrer">{speaker.company}</a></p>
              <div className="flex justify-center">
                <Link to={`https://www.twitter.com/${speaker.twitter}`}><FontAwesomeIcon size="1x" icon={faTwitter} /></Link>
                {hasLinkedIn && <Link className="ml-1" to={`https://www.linkedin.com/${speaker.linkedin}`}><FontAwesomeIcon size="1x" icon={faLinkedin} /></Link>}
              </div>
            </div>
          </div>
        </>
      }
    </div>
  )
}

SpeakerBioItem.propTypes = {
  speaker: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    companyUrl: PropTypes.string,
    company: PropTypes.string,
    twitter: PropTypes.string,
    linkedin: PropTypes.string
  }),
  handleClick: PropTypes.func.isRequired
}

export default SpeakerBioItem
