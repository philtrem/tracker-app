import React, {useState} from 'react'
import styled from 'styled-components'

import TrackerWrapper from './TrackerWrapper'
import TabBar from './Tabs/TabBar'
import StyledTab from './Tabs/Tab'

function newTab() {

}

function Tracker() {
  const [tabs, setTabs] = useState([{label:"Untitled", first:true, focused:true, id:0}])
  return (
    <TrackerWrapper>
      <TabBar tabs={tabs} setTabs={setTabs}>
      </TabBar>
    </TrackerWrapper>
  )
}

export default Tracker