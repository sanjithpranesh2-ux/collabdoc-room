import { useState } from 'react'
import { auth } from "./firebase";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import VoiceRoom from './components/VoiceRoom'

function App() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>CollabDoc</h1>
      <h2>Firebase feature – work in progress</h2>

      <div className="card">
      <button
      onClick={() => {
      console.log("Auth object:", auth);
      }}
>
      Test Firebase Auth
      </button>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
    <div className="App">
      <div
        style={{
          marginTop: '40px',
          padding: '20px',
          borderTop: '2px solid #646cff',
        }}
      >
        <h2>Collaboration Room</h2>
        <VoiceRoom />
      </div>
    </div>
  )
}

export default App
