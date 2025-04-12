import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function RotatingMesh() {
  const meshRef = useRef()
  const gltf = useLoader(GLTFLoader, "src/assets/Poimandres.gltf")
  // Rotate the mesh on every frame
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.00
      meshRef.current.rotation.y += 0.01
      meshRef.current.rotation.z += 0.00
    }
  })

  return (
    
    <primitive ref={meshRef} object={gltf.scene} scale={1} position={-3,-1.5}/>
    // <mesh ref={meshRef}>
    //   <meshPhongMaterial />
    //   <sphereGeometry args={[2, 32, 32]} />
    //   <meshStandardMaterial color="white" />
    // </mesh>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div id="canvas-container">
        <Canvas>
          <directionalLight color="white" position={[0, 10, 30]} />
          <pointLight color="white" position={[0, 0, -5]} />
          <ambientLight color="white" />
          <RotatingMesh />
          <spotLight
            color="green"
            position={[0, 5, 5]}
            angle={0.3}
            penumbra={1}
            intensity={1.5}
            castShadow
          />
        </Canvas>
      </div>

      <h1>Bryan Linares</h1>
      <h2>CS @ CSULB</h2>

      <div className="card">
        <p>

          -At the top, my name and schooling. 
          About me: I am a fullstack developer with experience in React, Express, and MongoDB. 
          I am currently learning Three.js and Vite.
        </p>
      </div>
      <div className="project">
        <p>
          Project: 3D Rendering using OpenGL
        </p>
      </div>
      <div className="project">
        <p>
          Bugfixhoung
        </p>
      </div>
      <div className="project">
        <p>
          Personal Website
          <h3>React, Express, MongoDB</h3>
          <h4>Three.js</h4>
          <h5>Vite</h5>
          <h6>Amplify</h6>
        </p>
      </div>
      <div className="project">
        <p>
          3D Rendering using OpenGL
        </p>
      </div>
      <div className="project">
        <p>
          3D Rendering using OpenGL
        </p>
      </div>
      <div className="project">
        <p>
          3D Rendering using OpenGL
        </p>
      </div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        
        The plan is to build a fullstack app with React, Express, and MongoDB <br/>
        For now I will add Three.js. I will add a 3D model of a car and allow the user to rotate it.
      </p>


      <div className="card">
        <a href="https://github.com/bryanl1" target="_blank"> My github
        </a>
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