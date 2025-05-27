import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'
import Home from './pages/Home'

const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/loginm' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='*' element={<h1>Index</h1>} />
      </Routes>
    </Router>
  )
}

export default App
