import React from "react"
import PropTypes from "prop-types"

function PageTitleSection (props) {
  const { title } = props

  return (
    <section className="w-full">
      <div className="bg-orange-500">
        <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6">
          <h2 className="text-3xl leading-9 font-bold text-white sm:text-4xl sm:leading-10">
            {title}
          </h2>
        </div>
      </div>
    </section>
  )
}

PageTitleSection.propTypes = {
  title: PropTypes.string
}

export default PageTitleSection
