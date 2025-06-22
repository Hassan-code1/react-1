import React from 'react'
import './counter.css'
const Counter = () => {
    const [count, setCount] = React.useState(0);
  return (
    <div className='Counter'>
      <p className='Counter-para'>Counter is Clicked {count} times</p>
      <button className='Counter-button' onClick={()=>{setCount(count+1)}}>Increment</button>
    </div>
  )
}

export default Counter;
