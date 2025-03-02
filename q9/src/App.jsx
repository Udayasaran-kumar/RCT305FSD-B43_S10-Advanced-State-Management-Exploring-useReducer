import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FormApp from './FormApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FormApp/>
    </>
  )
}

export default App
