import React from "react"
import styled from 'styled-components'
// January = 1
const daysInMonth = (month, year) => new Date(year, month, 0).getDate()
// 0 to 6, Sunday = 0
const firstDayOfTheMonth = (month, year) => new Date(year, month-1, 1).getDay()

const getDaysOfTheMonth = (month, year) => {
  const out = []
  const firstDay = firstDayOfTheMonth(month, year)
  const numberOfDays = daysInMonth(month, year)
  const daysInPreviousMonth = daysInMonth(month-1, year)

  const start = 1-firstDay+daysInPreviousMonth
  for (let i = start; i < start+firstDay; i++) {
    out.push(i)
  }
  for (let i = 1; i <= numberOfDays; i++) {
    out.push(i)
  }
  for (let i = 1; i < 35-numberOfDays; i++) {
    out.push(i)
  }
  return out
}

const DayGrid = styled.div`
  display: flex;
  flex-flow: wrap;
  width: calc(7*8.2rem);
  background: white;
`

const DaysOfTheMonth = props => {
  const daysOfTheMonth = getDaysOfTheMonth(props.month, props.year)
  const numberOfDays = daysInMonth(props.month, props.year)
  let disabled = true
  const Centered = styled.div`
    display: flex;
    justify-content: center;
  `
  return (
    <Centered>
      <DayGrid>
        {
          daysOfTheMonth.map((n, i) => {
            if (n === 1 && i < 7) {
              disabled = false
            } else if (n === 1 && i > 6) {
              disabled = true
            }
            return (
              <StyledDayCell key={i} disabled={disabled}> {n} </StyledDayCell>
            )
          })
        }
      </DayGrid>
    </Centered>

  )
}

const DayCell = ({className, children}) => (
  <div className={className}
       onClick=""
  > {children} </div>
)

const StyledDayCell = styled(DayCell)`
  ${props => props.disabled
  ? "background: #383838;"
  : "background: linear-gradient(#ffffff, #c3c3c3); "};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  height: 8rem;
  width: 8rem;
  border: 0.1rem solid black;
  &:hover {
    ${props => !props.disabled && "background: linear-gradient(#FFFFFF, #af8cd5)"};
  }
`

export default DaysOfTheMonth