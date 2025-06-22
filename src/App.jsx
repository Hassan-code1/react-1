import './App.css'
import UserCard from './components/UserCard'
import Counter from './components/Counter'
import Card from './components/Card'
import ButtonCard from './components/ButtonCard'
import React from 'react'
// import Navbar from  './components/navbar.jsx'
function App() {
  const desc = "This is a short bio about the user. It gives a brief overview of their interests and background."
  const [count, setCount] = React.useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <div className='app-container'>
      {/* <Navbar/> */}
      < UserCard name="pappu" description={desc}/>
      < UserCard name="sheru" description={desc}/>
      < UserCard name="ballu" description={desc}/>
      < UserCard name="ballu" description={desc}/>
      < Counter/>
      < Card>
        <h1>Best Web dev</h1>
        <p>Hello World</p>
      </Card>
      <ButtonCard incrementCount={handleClick}>
        {count}
      </ButtonCard>
    </div>
  )
}

export default App
