import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function RotatingMesh() {
  const meshRef = useRef()

  // Rotate the mesh on every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

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
        <Canvas>
          <directionalLight color="red" position={[0, 0, 5]} />
          <ambientLight color="white" />
          <RotatingMesh />
        </Canvas>
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