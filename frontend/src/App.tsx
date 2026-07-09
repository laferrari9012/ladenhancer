import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import { ShellProvider } from './context/ShellContext'

function App() {
  return (
    <BrowserRouter>
      <ShellProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </ShellProvider>
    </BrowserRouter>
  )
}

export default App
