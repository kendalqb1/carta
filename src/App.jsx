import { useState } from 'react'
import './App.css'

function App() {
  const [URL, setURL] = useState('https://www.greetingsisland.com/ecard/pn0kyuzey2oc');

  const handleClick = () => {
    window.location.href = URL;
  }

  return (
    <>
      <h1>Carta</h1>
      <div className="card">
        <button onClick={handleClick}>
          Presiona para ir a la carta
        </button>
      </div>
    </>
  )
}

export default App
