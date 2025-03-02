import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VisibilityToggleApp from './VisibilityToggleApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <VisibilityToggleApp/>
    </>
  )
}

export default App
