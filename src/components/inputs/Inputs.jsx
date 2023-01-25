import "./Inputs.scss";
import React from 'react'

const Inputs = ({ typeInput, handleFilter, valuesText, id, inputText }) => {
  return (
    <div>
       <label htmlFor={id}>{inputText}</label>
       <input type={typeInput} onChange={handleFilter} value={valuesText} id={id} />
    </div>
  )
}

export default Inputs
