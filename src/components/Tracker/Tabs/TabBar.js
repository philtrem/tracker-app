import styled from "styled-components"
import React, {useRef, useEffect} from 'react'
import StyledTab from './Tab'

// TODO: FIX PROBLEM: NO FOCUSED TAB AFTER CLOSING ALL TABS

const StyledTabBar = styled(TabBar)`
  background: #cdcdcd;
  border-radius: 0.5rem 0.5rem 0 0;
  display: flex;
  align-items: flex-end;
  height: 2rem;
  width: 100%; 
  .add-tab {
    font-family: monospace;
    font-size: 2rem;
    text-align: center;
    height: 2rem;
    width: 2rem;
    margin-left: 0.15rem;
    &:hover {
      background: #d7d7d7;
      border-radius: 0.45rem;
    }
  }
`
function TabBar({className, tabs, setTabs}) {
  let untitledCount = useRef(0)
  useEffect(
    () => tabs.forEach(tab => tab.label.includes("Untitled")
      && untitledCount.current++),
    []
  )
  const newId = () => Math.floor(Math.random() * 10**7)
  const newTab = () => {
    tabs.forEach(tab => tab.focused = false)
    setTabs([...tabs, {
      id: newId(),
      label:  untitledCount.current > 0 ? `Untitled${untitledCount.current}` : `Untitled`,
      focused: true,
    }])
    untitledCount.current++
  }
  const removeTab = id => (
    setTabs(tabs.filter(tab => tab.id !== id))
  )
  const focusTab = id => {
    setTabs(tabs.map(tab => ({
      ...tab,
      focused: id === tab.id,
    })))
  }
  return (
    <div className={className}>
      {tabs.map((tab, i) => (
        <StyledTab
          key={tab.id} tab={tab}
          removeTab={removeTab} focusTab={focusTab}
          first={i === 0} focused={tab.focused}/>
      ))}
      <div className="add-tab"
           onClick={newTab}
      > + </div>
    </div>
  )
}

export default StyledTabBar
