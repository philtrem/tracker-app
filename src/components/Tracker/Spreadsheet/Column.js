import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import StyledRow from './Row'

const StyledColumn = styled(Column)` 
  outline: 1px solid black;
  width: ${props => props.width ? props.width : "10rem"};
  resize-handler {
    background: black;
    height: 100%;
    width: 0.1rem;
  }
`


function Column({className, rows}) {
  return (
      <div className={className}>
        { rows.map(row => <StyledRow key={row.id} content={row.content}/>) }
      </div>
    )
}

export default StyledColumn