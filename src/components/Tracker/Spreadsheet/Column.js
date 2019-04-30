import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import StyledRow from './Row'

const StyledColumn = styled(Column)`
  width: ${props => props.width};
  .label-wrapper {
    position: sticky;
    display: flex;
    background: #f4f4f4;
    border: 1px solid #828282;
    border-right: none;
    ${props => !props.isFirstColumn && "border-left: none"};
  }
  .label {
    color: #282828;
    font-size: 1.2rem;
    height: 1.7rem;
    width: 100%;
  }
  .separator-resize-handle {
  position: absolute;
  background: ${props => props.isLastColumn ? "white" : "#f4f4f4"};
  border-left: 1px solid #828282;
  width: 4px;
  height: 1.7rem;
  margin-left: calc(${props => props.width} - ${props => props.isFirstColumn ? "2px" : "1px"});
    &:hover {
      border-left: 7px solid #3c88ff;
      margin-left: calc(${props => props.width} - ${props => props.isFirstColumn ? "8px" : "7px"});
      cursor: ew-resize;
    } 
  }
  .resize-handle-toggled {
    position: fixed;
    border-right: 1px solid #3c88ff;
    height: 100%;
    margin-left: calc(${props => props.width} - 0.25rem);
    // margin-left: calc(${props => props.width} - 0.25rem + ${props => props.offsetX}px);
    }
`


function Column({className, id, label, rows, isFirstColumn, isLastColumn, resizeHandler, isToggledResize}) {
  return (
    <div className={className}
    >
      <div className="label-wrapper">
        <div className="label">
          {label}
        </div>
        <div className="separator-resize-handle"
             onMouseDown={() => resizeHandler(id, true)}
        > </div>
        <div className={`${isToggledResize ? "resize-handle-toggled": ""}`}>
        </div>
      </div>
      <div className="rows-wrapper">
        { rows.map((row, i) => <StyledRow key={`${id}${i}`} content={row.content} isFirstColumn={isFirstColumn} isLastColumn={isLastColumn}/>) }
      </div>
    </div>
  )
}

export default StyledColumn