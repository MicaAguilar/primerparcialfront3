import { useState } from 'react'
import './App.css' 
import Card from './Components/Card'

function App() {
  const [user, setUser] = useState({
    name: '',
    car: ''
  })

  const [show, setShow] = useState(false)
  const [err, setErr] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if(user.name.length >= 3 && user.car.length >= 6 && user.name[0] !== " "){
      setShow(true)
      setErr(false)
    } else {
      setErr(true)
      setShow(false)
    }
  }

  return (
    <div className="App">
      <h2>Elige un auto</h2>
      <form className="Formulario" onSubmit={handleSubmit}>
        <input 
          className='input'
          placeholder='Ingrese su nombre'
          type="text"
          onChange={(event) => setUser({...user, name: event.target.value})}/>
        
        <input
          className='input'
          placeholder='Ingrese su auto favorito'
          type="text"
          onChange={(event) => setUser({...user, car: event.target.value})}/>
        
        <button className='button'>ENVIAR</button>
      </form>
      {err ? <span style={{color: 'red'}}>Por favor chequea que la información sea correcta.</span> : null}
      
      {show ? <Card name={user.name} car={user.car}/> : null}
    </div>

  )
  
}

export default App
