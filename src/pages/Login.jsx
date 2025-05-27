import React, { useState } from 'react'
import InptAuthForm from '../components/InptAuthForm'
import { Link } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div class="login-card">
      <h3 class="text-center mb-4">Login</h3>
      <form>
        <InptAuthForm type={'email'} value={email} setValue={setEmail} text={"E-mail"} placeholder={'email@example.com'} />
        <InptAuthForm type={'password'} />
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="lembrar" />
          <label class="form-check-label" for="lembrar">Lembrar-me</label>
        </div>
        <button type="submit" class="btn btn-primary w-100">Entrar</button>
        <div class="text-center mt-3">
          <span>Não possuí conta? <Link>Registre-se aqui</Link></span>
        </div>
      </form>
    </div>
  )
}

export default Login
