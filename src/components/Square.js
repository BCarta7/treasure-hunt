import React from "react"

const Square = (props) => {

  const handleClick = () => {
    if (props.value !== "?" || props.status !== null) {
     return null
    } else {
    props.handleGamePlay(props.index)
    props.minus()} 
  }
  return (
    <>
      <div className="square" onClick={handleClick}>{props.value}</div>
    </>
  )
}
export default Square
