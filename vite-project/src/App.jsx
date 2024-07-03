import { useState } from 'react'
import PoemBox from './PoemBox.jsx'
import './App.css';
import LoginPopup from './LoginPopup/LoginPopup.jsx';

function App() {
  const [count, setCount] = useState(0)
  const[showLogin, setShowLogin]= useState(true)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
      <h1 className='header'>Moody</h1>
      <p> How are you feeling today?</p>

      <PoemBox />
     
    </>
  )
}

export default App
