import React, {useState} from 'react'
import styled from 'styled-components'

import TrackerWrapper from './TrackerWrapper'
import StyledTabBar from './Tabs/TabBar'
import StyledSpreadsheet from './Spreadsheet/Spreadsheet'

function newTab() {

}

const newId = () => Math.floor(Math.random() * 10**7)
const rows = Array(20).fill(0)
for (let i in rows) {
  rows[i] = {id: newId(), content: "justsometext"}
}

function Tracker() {
  const [tabs, setTabs] = useState([{label:"Untitled", first:true, focused:true, id:0}])
  const [columns, setColumns] = useState([{id:0, rows}, {id:1, rows}])
  return (
    <TrackerWrapper>
      <StyledTabBar tabs={tabs} setTabs={setTabs}/>
      <StyledSpreadsheet columns={columns}/>
    </TrackerWrapper>
  )
}

export default Tracker