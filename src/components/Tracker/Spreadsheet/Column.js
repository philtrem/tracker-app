import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import StyledRow from './Row'
import StyledResizeHandle from './ResizeHandle'

const StyledColumn = styled(Column)`
  display: flex;
  width: ${props => props.width}px;
  .content-wrapper {
    display:block;
    width: ${props => props.width}px;
  }
  .label-wrapper {
    width: ${props => props.width}px;
    position: absolute;
    display: flex;
    background: #f4f4f4;
    border: 1px solid #828282;
    box-sizing: border-box;
    ${props => !props.isFirstColumn && "border-left: none"};
  }
  .label {
    width: ${props => props.width}px;
    overflow: hidden;
    color: #282828;
    font-size: 1.2rem;
    height: 1.7rem;
    width: 100%;
  }
`

function Column({className, id, label, width, rows, isFirstColumn, isLastColumn, setColumnWidth}) {
  const [isToggledResize, setIsToggledResize] = useState(false)
  const [isToggledId, setIsToggledId] = useState(0)
  const resizeHandler = (id, bool) => {
    setIsToggledId(id)
    setIsToggledResize(bool)
  }
  const [offsetX, setOffsetX] = useState(0)
  return (
    <div className={className}>
      <div className="content-wrapper">
        <div className="label-wrapper">
          <div className="label">
            {label}
          </div>
          <StyledResizeHandle id={id} width={width} columnLength={rows.length} offsetX={offsetX}
                              isFirstColumn={isFirstColumn} isLastColumn={isLastColumn}
                              isToggledResize={isToggledResize}
                              resizeHandler={resizeHandler} setOffsetX={setOffsetX}
                              setColumnWidth={setColumnWidth}
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