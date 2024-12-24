import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import LoginForm from './components/login/loginForm'
import LandingPage from './components/landing/landing'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginForm />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
