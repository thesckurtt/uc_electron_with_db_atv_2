import React, { useState } from 'react'
import InptAuthForm from '../components/InptAuthForm'
import { Link } from 'react-router-dom'

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <div className="login-card">
      <h3 className="text-center mb-4">Login</h3>
      {error &&
        <div className="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
      }
      <form onSubmit={(e) => handleSubmit(e)}>
        <InptAuthForm type={'text'} value={name} setValue={setName} text={"Nome"} placeholder={'João Vitor'} />
        <InptAuthForm type={'email'} value={email} setValue={setEmail} text={"E-mail"} placeholder={'email@example.com'} />
        <InptAuthForm type={'password'} value={password} setValue={setPassword} text={"Senha"} placeholder={'********'} />
        <button type="submit" className="btn btn-primary w-100">Registrar</button>
        <div className="text-center mt-3">
          <span>Possuí uma conta? <Link to={'/login'} replace={true}>Entre aqui</Link></span>
        </div>
      </form>
    </div>
  )
}

export default Register
