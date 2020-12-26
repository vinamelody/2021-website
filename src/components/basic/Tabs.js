import React, { useState, useEffect, useContext, useCallback } from "react"
import PropTypes from "prop-types"

const TabsContext = React.createContext()

function useTabsContext () {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Unable to use TabContext')
  }
  return context
}

function Tabs (props) {
  const { defaultSelected, children, currentTab } = props
  const [selected, setSelected] = useState(defaultSelected)

  const setActiveTab = useCallback((key) => {
    setSelected(key)
  })
  const selectHandler = (event) => {
    setSelected(event.target.value)
  }

  useEffect(() => {
    if (currentTab) {
      currentTab(selected)
    }
  }, [selected, currentTab])

  const value = { selected, setActiveTab }

  return (
    <TabsContext.Provider value={value}>
      <div className="sm:hidden">
        <select name="conferenceDay" aria-label="Selected tab" className="form-select block-w-full" value={selected} onChange={selectHandler}>
          {
            children.map(option => {
              return (<option key={option.props.labelKey} value={option.props.labelKey}>{option.props.children}</option>)
            })
          }
        </select>
      </div>
      <div className="hidden sm:block">
        <nav className="flex justify-center mb-8">
          {children}
        </nav>
      </div>
    </TabsContext.Provider>
  )
}

Tabs.propTypes = {
  tabItems: PropTypes.array,
  defaultSelected: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
  currentTab: PropTypes.func
}

Tab.propTypes = {
  children: PropTypes.string,
  labelKey: PropTypes.string
}

const defaultClass = "px-3 py-2 mr-2 font-medium text-xl leading-5 rounded-md focus:outline-none focus:text-orange-600 focus:bg-orange-50"

function Tab (props) {
  const { children, labelKey } = props

  const { selected, setActiveTab } = useTabsContext()

  const handleChange = () => {
    setActiveTab(labelKey)
  }

  const itemClass = () => {
    if (selected === labelKey) {
      return defaultClass + " text-orange-700 bg-orange-100"
    } else {
      return defaultClass + " text-gray-600 hover:text-gray-700"
    }
  }

  const attributes = selected === labelKey ? {
    'aria-current': 'page'
  } : {}

  return (
    <a className={itemClass()} onClick={handleChange} {...attributes}>
      {children}
    </a>
  )
}

Tabs.Tab = Tab

export default Tabs
