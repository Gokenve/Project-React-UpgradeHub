import "./Button.scss";
import React from 'react'

const Button = ({ 
    text, 
    id,
    typeButton, 
    handleClicK 
}) => {

  return (
    <div>
        <button className={typeButton} onClick= {handleClicK} id={id}>
          {text}
        </button>
      
    </div>
  )
}

export default Button
