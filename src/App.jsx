import './App.css'
import VoiceRoom from './components/VoiceRoom'

function App() {
  return (
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
