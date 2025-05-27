import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import Register from './pages/Register'

const App = () => {
  return (
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<Navigate to={'/login'} replace />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path='*' element={<h1>Index</h1>} />
      </Routes>
    </Router>
  )
}

export default App
