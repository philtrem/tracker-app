import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import StyledColumn from './Column'

const StyledSpreadsheet = styled(Spreadsheet)`
  display: flex;
  max-height: 98%;
  max-width: 95%;
  margin-left: 1rem;
  margin-top: 1rem;
  .add-column {
    display: ${props => !props.last ? "flex": "none"};
    background: #e6e6e6;
    border-right: 2px solid #bababa;
    border-radius: 0 0.75rem 0.5rem 0;
    align-items: center;
    justify-content: center;
    font-family: monospace;
    font-size: 2rem;
    height: 3rem;
    width: 2rem;
    margin-left: 0.1rem;
  }
`

function Spreadsheet({className, columns}) {
  return (
    <div className={className}>
      { columns.map((column) => <StyledColumn key={column.id} rows={column.rows}/>) }
      <div className="add-column">
        <p> + </p>
      </div>
    </div>

  )
}

export default StyledSpreadsheet