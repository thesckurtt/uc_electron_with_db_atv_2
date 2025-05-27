import React from 'react'
import InptAuthForm from '../components/InptAuthForm'

const Login = () => {
  return (
    <div class="login-card">
      <h3 class="text-center mb-4">Login</h3>
      <form>
        <InptAuthForm />
        <InptAuthForm />
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="lembrar" />
          <label class="form-check-label" for="lembrar">Lembrar-me</label>
        </div>
        <button type="submit" class="btn btn-primary w-100">Entrar</button>
        <div class="text-center mt-3">
          <a href="#">Esqueceu a senha?</a>
        </div>
      </form>
    </div>
  )
}

export default Login
