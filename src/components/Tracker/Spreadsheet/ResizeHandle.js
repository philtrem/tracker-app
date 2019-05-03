import React, {useEffect} from "react"
import styled from 'styled-components'

const StyledResizeHandle = styled(ResizeHandle).attrs({
  posX: props => props.isFirstColumn
    ? String(props.width + props.offsetX - 1) + "px"
    : String(props.width + props.offsetX) + "px"
})`
  position: absolute;
  left: ${props => props.posX};
  .separator-one {
  z-index: 99;
  position: absolute; 
  background: #f4f4f4;
  border-right: 1px solid #828282;
  box-sizing: border-box;
  width: 7px;
  height: 1.7rem;
  margin-left: -7px;
    &:hover {
      background: #3c88ff;
      cursor: ew-resize;
    } 
  }
  .separator-one.resize-toggled {
    background: #3c88ff;
    border: none;
    cursor: ew-resize;
  }
  .separator-two {
  z-index: 99;
  position: absolute;
  background: ${props => props.isLastColumn ? "white" : "#f4f4f4"};
  background: ${props => props.isToggledResize ? "none": ""};
  box-sizing: border-box;
  width: 4px;
  height: 1.7rem;
    &:hover {
      margin-left: -7px;
      width:11px;
      background: #3c88ff;
      border-right: 4px solid ${props => props.isLastColumn ? "white": "#f4f4f4"};
      cursor: ew-resize;
    }
  }
  .resize-handle-toggled {
    position: absolute;
    border-right: 1px solid #3c88ff;
    height: calc(1.7rem * (${props => props.columnLength} + 1));
    margin-left: -0.25rem;
  }
`

function ResizeHandle({className, id, width, offsetX, isToggledResize, resizeHandler, setOffsetX, setColumnWidth}) {
  const pointerIdRef = React.useRef(null)
  const initialXRef = React.useRef(0)
  const hasCaptureRef = React.useRef(false)
  const newWidthRef = React.useRef(0)
  const onDown = e => {
    newWidthRef.current = 0
    hasCaptureRef.current = true
    initialXRef.current = e.pageX
    pointerIdRef.current = e.pointerId
    e.target.setPointerCapture(e.pointerId)
    resizeHandler(id, true)
  }
  const onUp = e => {
    setOffsetX(0)
    e.target.releasePointerCapture(pointerIdRef.current)
    hasCaptureRef.current = false
    resizeHandler(null, false)
    setColumnWidth(id, newWidthRef.current + width)
  }
  const onMove = e => {
    if (hasCaptureRef.current) {
      setOffsetX(e.pageX - initialXRef.current)
      newWidthRef.current = e.pageX - initialXRef.current
    }
  }
  const resizeHandleRef = React.useRef(null)
  return (
    <div className={className}
         onPointerDown={onDown}
         onPointerUp={onUp}
         onPointerMove={onMove}
         ref={resizeHandleRef}
    >
      <div className={`separator-one ${isToggledResize ? "resize-toggled": ""}`}
      > </div>
      <div className="separator-two"
      > </div>
      <div className={`${isToggledResize ? "resize-handle-toggled": ""}`}>
      </div>
    </div>
  )
}

export default StyledResizeHandle