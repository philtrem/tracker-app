import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import StyledRow from './Row'
import StyledResizeHandle from './ResizeHandle'

const StyledColumn = styled(Column)`
  display: flex;
  width: ${props => props.width};
  .content-wrapper {
    display:block;
  } 
  .label-wrapper {
    position: relative;
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
`


function Column({className, id, label, rows, isFirstColumn, isLastColumn, resizeHandler, isToggledResize}) {
  return (
    <div className={className}>
      <div className="content-wrapper">
        <div className="label-wrapper">
          <div className="label">
            {label}
          </div>
          <StyledResizeHandle id={id} width columnLength={rows.length} offsetX
                              isLastColumn={isLastColumn} isToggledResize={isToggledResize}
                              resizeHandler={resizeHandler}
          />
        </div>
        <div className="rows-wrapper">
          { rows.map((row, i) => (
            <StyledRow key={`${id}${i}`} content={row.content}
                       isFirstColumn={isFirstColumn} isLastColumn={isLastColumn}
            />
          ))}
        </div>
      </div>
      </div>

  )
}

export default StyledColumn