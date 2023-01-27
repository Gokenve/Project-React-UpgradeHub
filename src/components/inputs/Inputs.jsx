import "./Inputs.scss";
import React from 'react'

const Inputs = ({ type, handleFilter, value, page, inputText }) => {
  return (
    <div className="containerInput">
       <label htmlFor={page}>{inputText}</label>
       <input className="inputClass" type={type} onChange={handleFilter} value={value} id={page} />
    </div>
  )
}

export default Inputs
