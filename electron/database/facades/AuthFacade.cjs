const UserFacade = require("./UserFacade.cjs")
const bcryptjs = require('bcryptjs')
class AuthFacade {
  static async login({ email, password }) {
    try {
      const user = await UserFacade.getUserByEmail(email)

      if (!user) {
        return { error: true, message: 'User not found' }
      }
      const isValidPassword = await bcryptjs.compare(password, user.password)

      if (isValidPassword && user) {
        return { error: false, user: user }
      }

      return { error: true, message: "Invalid credentials" }

    } catch (error) {
      return { error: true, message: `[AuthFacade]: ${error.message || 'Unexpected error'}` }
    }
  }

  static async register({name, email, password}){
    
  }
}

// AuthFacade.login({ email: "Gianni_Bernhard62@yahoo.com", password: "teste" }).then(res => console.log(res))
module.exports = AuthFacade