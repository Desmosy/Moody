import { useState } from 'react'
import PoemBox from './PoemBox.jsx'
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='header'>Moody</h1>
      <PoemBox />
     
    </>
  )
}

export default App