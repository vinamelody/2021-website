import React from "react"
import PropTypes from "prop-types"
import classname from "classnames"

function ScheduleTable (props) {
  const { schedule, tab } = props

  const classnameFor = (index) => {
    return classname('hover:bg-orange-100', {
      "bg-gray-100": index % 2 === 0,
      "bg-white": index % 2 === 0
    })
  }

  return (
    <table className="w-full divide-ydivide-gray-200" data-testid={tab}>
      <tbody className="bg-white divide-y divide-x divide-gray-200">
        {
          schedule.map((talk, index) => {
            if (talk.speaker_name === "Organiser") {
              return (
                <tr key={index} className={classnameFor(index)}>
                  <td className="w-1/6 sm:w-1/6 px-1 sm:px-6 py-3 whitespace-nowrap">{talk.start_at} - {talk.end_at}</td>
                  <td className="sm:w-1/3 px-1 sm:px-6 py-3 whitespace-nowrap" colSpan="2">{talk.title}</td>
                </tr>
              )
            } else {
              return (
                <tr key={index} className={classnameFor(index)}>
                  <td className="w-1/6 sm:w-1/6 px-1 sm:px-6 py-3 whitespace-nowrap align-top">{talk.start_at} - {talk.end_at}</td>
                  <td className="w-1/5 px-1 sm:px-6 py-3 whitespace-nowrap align-top">
                    <div className="min-w-0 flex flex-col sm:flex-row items-center">
                      <div className="flex-shrink-0">
                        <img className="h-16 w-16 rounded-full" src={`../speakers/${talk.speaker_image}.jpg`} />
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col items-left px-1 sm:px-4">
                        <h3 className="font-medium text-orange-600 my-0 underline">{talk.speaker_name}</h3>
                        <p className="text-sm text-gray-600">{talk.speaker_company}</p>
                      </div>
                    </div>
                  </td>
                  <td className="w-1/3 px-1 sm:px-6 py-3 whitespace-nowrap align-top">
                    <div>
                      <h3 className="font-medium text-orange-600 my-0">{talk.title}</h3>
                      <p>{talk.talk_description}</p>
                    </div>
                  </td>
                </tr>
              )
            }
          })
        }
      </tbody>
    </table>
  )
}

ScheduleTable.propTypes = {
  tab: PropTypes.string,
  schedule: PropTypes.arrayOf(PropTypes.object)
}

export default ScheduleTable
