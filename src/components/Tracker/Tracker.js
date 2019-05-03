import React, {useState} from 'react'
import styled from 'styled-components'

import TrackerWrapper from './TrackerWrapper'
import StyledTabBar from './Tabs/TabBar'
import StyledSpreadsheet from './Spreadsheet/Spreadsheet'


function Tracker() {
  
  const [tabs, setTabs] = useState([{label:"Untitled", first:true, focused:true, id:0}])
  return (
    <TrackerWrapper>
      <StyledTabBar tabs={tabs} setTabs={setTabs}/>
      <StyledSpreadsheet/>
    </TrackerWrapper>
  )
}

export default Tracker