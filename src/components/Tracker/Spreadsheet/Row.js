import React, {useState} from 'react'
import styled from 'styled-components'

const StyledRow = styled(Row)`
    box-sizing: border-box;
    font-size: 1em;
    padding: 0 0.2rem;
    height: 1.7rem;
    width: 100%;
    border: 1px solid #dcdcdc;
    ${props => !props.isFirstColumn && "border-left: none;"};
    border-top: none;
    &:focus {
      border: 0.1rem solid #3c88ff;
    }
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