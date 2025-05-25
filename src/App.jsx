import { useState } from 'react'
import sunanLogo from './assets/sunan.jpeg'
import mosqueLogo from '/masjid.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <header className="header">
        <img src={sunanLogo} className="logo" alt="Sunan Kalijaga Logo" />
        <h1 className="title">PAS Web PAI</h1>
        <p className="subtitle">Sunan Kalijaga & Sejarah Islam Nusantara</p>
      </header>

      <div className="card">
        <button onClick={() => setCount((c) => c + 1)}>
          Klik: {count}
        </button>
        <p>
          Edit file <code>src/App.jsx</code> untuk memulai projekmu.
        </p>
      </div>

      <footer className="footer">
        <img src={mosqueLogo} className="icon" alt="Islamic Icon" />
        <p className="read-the-docs">
          Dibuat untuk pembelajaran PAI kelas 11
        </p>
      </footer>
    </div>
  )
}

export default App