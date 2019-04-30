import React, {useState, useRef, useEffect} from 'react'
import styled from 'styled-components'
import StyledColumn from './Column'

const StyledSpreadsheet = styled(Spreadsheet)`
  display: flex;
  max-height: 98%;
  min-width: 100%;
  margin-left: 1rem;
  margin-top: 1rem;
  .column-wrapper {
    display: flex;
    width: 68rem;
    overflow: auto;
  }
  .add-column {
    display: ${props => !props.last ? "flex" : "none"};
    background: #e6e6e6;
    border: 1px solid #383838;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    height: 2.5rem;
    padding: 0.5rem;
  }
`
const getMaxColumnLength = columns => {
  let out = 0
  columns.forEach(column => {
    if (column.rows.length > out)  {
      out = column.rows.length
    }
  })
}

const newId = () => Math.floor(Math.random() * 10**10)
function Spreadsheet({className}) {
  const [columns, setColumns] = useState([])
  const [maxColumnLength, setMaxColumnLength] = useState(getMaxColumnLength(columns))
  const newColumn = () => {
    const defaultLength = 20
    const defaultWidth = "10rem"
    const column = {
      id: newId(),
      label: "untitled",
      width: defaultWidth,
      rows: Array(maxColumnLength || defaultLength).fill("")
    }
    setColumns([...columns, column])
  }
  const addColumnHandler = () => newColumn(maxColumnLength, setColumns)

  useEffect(() => {
    newColumn()
  }, [])
  const [isToggledResize, setIsToggledResize] = useState(false)
  const [isToggledId, setIsToggledId] = useState(0)
  const resizeHandler = (id, bool) => {
    setIsToggledId(id)
    setIsToggledResize(bool)
  }
  return (
    <div className={className}
         onMouseUp={() => resizeHandler(0, false)}
    >
      <div className="column-wrapper">
        { columns.map((column, i) => (
          <StyledColumn key={column.id} id={column.id} label={column.label}
                        width={column.width} rows={column.rows}
                        isFirstColumn={i === 0} isLastColumn={i === columns.length-1}
                        resizeHandler={resizeHandler}
                        isToggledResize={column.id === isToggledId && isToggledResize}
          />
        )) }
      </div>

      <div className="add-column"
           onClick={addColumnHandler}
      >
        <p> Add <br/> Column </p>
      </div>
    </div>

  )
}

export default StyledSpreadsheet