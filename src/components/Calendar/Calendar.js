import styled from 'styled-components'
import React, {useState} from 'react'
import DaysOfTheMonth from './DaysOfTheMonth'


const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: white;
  border: 1px solid #3d3d3d;
  box-shadow: 0.1rem 0.4rem 1rem #232323;
  margin: 1rem auto;
  padding-bottom: 0.5rem;
  width: 60rem;
  
  .month-label {
    
  }
  .week-label {
  }
  .day-label {
    display: inline-block;
    text-align: center;
    font-size: 1.3rem;
    margin: 0.25rem 0;
    width: 8rem;
  }
  .days-of-the-month {
    display: flex;
    flex-flow: wrap;
  } 
`
const MonthLabel = ({className, children}) => (
  <div className={className}>
    {children}
  </div>
)
const MonthLabelStyled = styled(MonthLabel)`
    background: linear-gradient(to right, #e3c0ff, #9446bf);
    color: #1b1b1b;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    font-size: 1.5rem;
    > p {
      margin: 0;
    }
    .month {
      &:hover {
          cursor: pointer;
        }
    }
    .prev {
      font-size: 1.1rem;
      margin-right: 1rem;
      &:hover {
        cursor: pointer;
        text-shadow: 0 0 0.5rem #ffffff;
      }
    }
    .next {
      font-size: 1.1rem;
      margin-left: 1rem;
      &:hover {
        cursor: pointer;
        text-shadow: 0 0 0.5rem #ffffff;
      }
    }
`

const WeekLabel = () => {
  const weekDays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
  ]
  return (
    <div className="week-label">
      {
        weekDays.map((day, i) => <DayLabel key={i} label={day}/>)
      }
    </div>
  )
}
const DayLabel = props => <div className="day-label"> {props.label} </div>
let currentMonth = "April"
function Calendar() {
  return (
    <CalendarWrapper>
      <MonthLabelStyled>
        <p className="prev"> {"<<"} </p>
        <p className="month"> {currentMonth} </p>
        <p className="next"> >> </p>
      </MonthLabelStyled>
      <WeekLabel/>
      <DaysOfTheMonth month={4} year={2019}/>
    </CalendarWrapper>
  )
}

export default Calendar


