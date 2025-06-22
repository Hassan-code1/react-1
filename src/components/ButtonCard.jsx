import React from 'react'

const ButtonCard = (props) => {
  return (
    <div>
        {props.children}
      <button onClick={props.incrementCount} className='button-card'>
        Click Me
      </button>
    </div>
  )
}

export default ButtonCard
