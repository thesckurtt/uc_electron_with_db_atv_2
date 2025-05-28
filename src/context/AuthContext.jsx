import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('user'))
    } catch (error) {
      console.log(error)
      return null
    }
  })
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === "true"
  })

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('isLoggedIn', 'true')
    } else {
      localStorage.removeItem('isLoggedIn')
    }
  }, [isLoggedIn])

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user])

  const logout = () => {
    setIsLoggedIn(false)
    setUser(null)
  }

  const login = async ({ email, password }) => {
    if (!window.electronAuth) {
      return { error: true, message: "Electron auth module not found" }
    }

    try {
      const response = await window.electronAuth.login({ email, password })
      if (!response.error) {
        setUser(response.user)
        setIsLoggedIn(true);
        return { error: false }
      }
      return { error: true, message: response.message }
    } catch (error) {
      return { error: true, message: `[AuthContext]: ${error.message || "Unexpected error!"}` }
    }
  }

  const register = async (user) => {

  }
  return (
    <AuthContext.Provider value={{ user, isLoggedIn, login, register }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)