import styled from "styled-components"
import React from "react"

const StyledTab = styled(Tab)`
  color: ${props => props.focused ? "black" : "#c3c3c3"};
  background: ${props => props.focused ? "#f3f3f3" : "#2d2d2d"};
  border-top: 1px solid #474747;
  border-right: 1px solid #474747;
  border-left: 1px solid #474747;
  border-radius: 0.35rem 0.35rem 0 0;
  display: flex;
  align-items: center;
  width: 12rem;
  height: 1.8rem;
  margin-left: ${props => props.first ? "0.5rem" : "0"};
  > p {
    margin-left: 0.5rem; 
  }
  .label-wrapper {
    width: 88%;
  }
  .remove {
    font-family: monospace;
    font-size: 1.2rem;
    text-align: center;
    height: 1.2rem;
    width: 1.2rem;
    &:hover {
      background: ${props => props.focused ? "#d7d7d7": "#555555"};
      border-radius: 0.45rem;
    }
  }
`
function Tab({className, tab, removeTab, focusTab}) {
  return (
    <div className={className}>
      <div className="label-wrapper"
           onClick={focusTab.bind(null, tab.id)}
      > <p> {tab.label} </p> </div>
      <div className="remove"
           onClick={removeTab.bind(null, tab.id)}
      > x </div>
    </div>
  )
}

export default StyledTab