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
    
    //<primitive ref={meshRef} object={gltf.scene} scale={1} position={-3,-1.5}/>
    <mesh ref={meshRef}>
      <meshPhongMaterial />
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

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
          Hello.<br/>
          I'm Bryan. I am a Computer Science student at California State University, Long Beach.
        </p>
        <p>
          I expect to graduate in December 2025.
          I am researching into computer graphics, machine learning, and performance optimization.
        </p>

      </div>
      <div className="project">
        <p>
          <h2>3D Renderer using OpenGL</h2>
          C++, OpenGL, SFML, CMake
          <br/>(In Progress)
        </p>
      </div>
      <div className="project">
        <p>
          <h2>Bugfixhound</h2>
          Boostrap, SQL, Python, FastAPI
        </p>
      </div>

      <div className="project">
        <p>
        <h2>Personal Website</h2>
          React, Vite, Three.js, on AWS
        </p>
      </div>

      <div className="project">
        <p>
          <h2>GBRAINS </h2>
          FPGA, Verilog, Computer Architecture
        </p>
      </div>
      <div className="project">
        <p>
        <h2>Rolling Arm Robot </h2>
        Embedded C, Linux, ARM microcontrollers, C++, OpenCV 
        </p>
      </div>
      <div className="project">
        <p>
        <h2>SIMPLE interpreter </h2>
        Java, ANTLR, Interpreter Design
        </p>
      </div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)} href="https://github.com/bryanl1">
          github.com/bryanl1
        </button>
        <p>
          
        </p>
      </div>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <p className="read-the-docs">
        
      </p>


      <div className="card">
        <a  target="_blank"> 2025
        </a>
        </div>
    </>
  )
}

export default App