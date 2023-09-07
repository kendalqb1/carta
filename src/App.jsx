import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_REACT_APP_URL)
  const [URL, setURL] = useState(import.meta.env.VITE_REACT_APP_URL);
  const [errorForm, setErrorForm] = useState(false)


  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue == 'weles rico' || inputValue == 'Weles rico') {
      window.location.href = URL;
      setErrorForm(false);
    }
    else {
      setErrorForm(true)
    }
  };

  return (
    <>
      <h1>Carta</h1>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>
          Contraseña (la frase que mas utilizamos):
          
        </label>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            style={errorForm ? inputStyleError : inputStyle}
          />
          {
            errorForm && <p style={labelError}>Frase incorrecta</p>
          }
        <button type="submit" style={buttonStyle}>
          Ver carta
        </button>
      </form>
    </>
  )
}

const labelStyle = {
  display: 'block',
  marginBottom: '15px',
}

const labelError = {
  color: '#FF0000',
  marginBottom: '30px'
}


const inputStyleError = {
  padding: '8px 16px',
  fontSize: '16px',
  border: '1px solid #FF0000',
  borderRadius: '4px',
  width: '100%',
  boxSizing: 'border-box',
  marginBottom: '16px',
  
};

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
