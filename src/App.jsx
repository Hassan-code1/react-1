import './App.css'
import UserCard from './components/UserCard'
import Counter from './components/Counter'
import Card from './components/Card'
import ButtonCard from './components/ButtonCard'
import React from 'react'
// import LoginButton from './components/LoginButton'
// import LogoutButton from './components/LogoutButton'
import Log from './components/log'
// import Navbar from  './components/navbar.jsx'
function App() {
  const desc = "This is a short bio about the user. It gives a brief overview of their interests and background."
  const [count, setCount] = React.useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  const[isLoggedIn, setIsLoggedIn] = React.useState(true);
  return (
    <div className='app-container'>
      < Log isLoggedIn={isLoggedIn} useState={setIsLoggedIn}/>
      < Counter/>
      < UserCard name="pappu" description={desc}/>
      < UserCard name="sheru" description={desc}/>
      {/* < UserCard name="ballu" description={desc}/> */}
      < UserCard name="ballu" description={desc}/>
      
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
