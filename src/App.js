import React, { useState } from 'react';
import Wrapper from "./components/Wrapper"
import Calendar from "./components/Calendar/Calendar"
import Tracker from "./components/Tracker/Tracker"

function App() {
  return (
    <Wrapper>
      {/*<Calendar/>*/}
      <Tracker/>
    </Wrapper>
  )
}

export default App;
