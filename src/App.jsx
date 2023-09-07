import { useState } from 'react'
import './App.css'

function App() {
  const [URL, setURL] = useState('https://www.greetingsisland.com/ecard/pn0kyuzey2oc');
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Valor del campo de entrada:', inputValue);
    if (inputValue == 'admin') {
      window.location.href = URL;
    }
    
  };

  return (
    <>
      <h1>Carta</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Ingrese un valor:
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Enviar
        </button>
      </form>
    </>
  )
}
// Me puedes dar unos estilos mas lindos y minimalistas
// al label 
const labelStyle = {
  display: 'block',
  marginBottom: '8px',
}


const inputStyle = {
  padding: '8px 16px',
  fontSize: '16px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
  marginBottom: '16px',

};

const buttonStyle = {
  padding: '8px 16px',
  fontSize: '16px',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
  marginBottom: '16px',
  backgroundColor: '#A20A75',
  color: 'white',
  cursor: 'pointer',

};

export default App
