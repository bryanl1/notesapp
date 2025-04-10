import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        The plan is to build a fullstack app with React, Express, and MongoDB
        For now I will add Three.js. I will add a 3D model of a car and allow the user to rotate it.
      </p>
      <div id="canvas-container">
        <Canvas >
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
          </Canvas >
      </div>
      <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="logo react" alt="React logo" />

        <h1>Hello from Amplify</h1>
      </header>
    </div>

    </>
  )
}

export default App
