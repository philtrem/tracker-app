import React from "react"
import styled from 'styled-components'

const StyledResizeHandle = styled(ResizeHandle)`
  .separator-one {
  z-index: 99;
  position: absolute; 
  background: #f4f4f4;
  border-right: 1px solid #828282;
  box-sizing: border-box;
  width: 7px;
  height: 1.7rem;
  margin-left: -7px;
    &:hover {
      background: #3c88ff;
      cursor: ew-resize;
    } 
  }
  .separator-one.resize-toggled {
    background: #3c88ff;
    cursor: ew-resize;
    margin-left: calc(-7px + ${props => props.offsetX})
  }
  .separator-two {
  z-index: 1000000;
  position: absolute;
  background: ${props => props.isLastColumn ? "white" : "#f4f4f4"};
  box-sizing: border-box;
  width: 4px;
  height: 1.7rem;
  margin-left: 0;
    &:hover {
      margin-left: -7px;
      width:11px;
      background: #3c88ff;
      border-right: 4px solid ${props => props.isLastColumn ? "white": "#f4f4f4"};
      cursor: ew-resize;
    }
  }
  .resize-handle-toggled {
    position: absolute;
    border-right: 1px solid #3c88ff;
    height: calc(1.7rem * (${props => props.columnLength} + 1));
    margin-left: -0.25rem;
    // margin-left: calc(${props => props.width} - 0.25rem);
    // margin-left: calc(${props => props.width} - 0.25rem + ${props => props.offsetX}px);
    }
`

function ResizeHandle({className, id, isToggledResize, resizeHandler}) {
  return (
    <div className={className}>
      <div className={`separator-one ${isToggledResize ? "resize-toggled": ""}`}
           onMouseDown={() => resizeHandler(id, true)}
      > </div>
      <div className="separator-two"
           onMouseDown={() => resizeHandler(id, true)}
      > </div>
      <div className={`${isToggledResize ? "resize-handle-toggled": ""}`}>
      </div>
    </div>
  )
}

export default StyledResizeHandle