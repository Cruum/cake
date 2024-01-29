import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Connexion from './composants/connexion'

function App() {
  
  const [ name, setName]  = useState()

  return (
    <div>
      <h1>Bienvenue chez nous!</h1>

      <Connexion name={name} setName={setName}/>
    </div>
  )
}

export default App
