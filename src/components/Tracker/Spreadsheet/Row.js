import React, {useState} from 'react'
import styled from 'styled-components'

const StyledRow = styled(Row)`
  box-sizing: border-box;
  font-size: 1em;
  height: 1.7rem;
  padding: 0 0.1rem;
  width: 100%;
`

function Row({className, content}) {
  const [value, setValue] = useState(content)
  const onChangeHandler = e => setValue(e.target.value)
  return (
    // remember: nest <input> into div if you need 'onClick' listener
    <input type="text"
           className={className}
           value={value}
           onChange={onChangeHandler}
    />


  )
}

export default StyledRow