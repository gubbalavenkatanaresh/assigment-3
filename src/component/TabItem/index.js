import './index.css'

const TabItem = props => {
  const {eachTab, activeTab, changeActiveTabId} = props
  const {tabId, displayText} = eachTab
  const btnClassName = activeTab === tabId ? 'tab-button active' : 'tab-button'
  const clickTab = () => {
    changeActiveTabId(tabId)
  }

  return (
    <li>
      <button type="button" className={btnClassName} onClick={clickTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
