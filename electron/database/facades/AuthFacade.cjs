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

  static async register({ name, email, password }) {
    try {
      const hashedPassword = await bcryptjs.hash(password, 10)
      const isRegistered = await UserFacade.addUser({ name, email, hashedPassword })
      // console.log(isRegistered)
      if (isRegistered && !isRegistered?.error) {
        return { error: false, message: "User registered succesfully!" }
      }
      return { error: true, message: "User not registered!" }
    } catch (error) {
      return { error: true, message: `[AuthFacade]: ${error.message || 'Unexpected error!'}` }
    }
  }
}
// AuthFacade.register({name: "Joshuwe", email: "Josdhdduwe_Bernhard62@yahoo.com", password: "teste"}).then(res => console.log(res))
// AuthFacade.login({ email: "Gianni_Bernhard62@yahoo.com", password: "teste" }).then(res => console.log(res))
module.exports = AuthFacade