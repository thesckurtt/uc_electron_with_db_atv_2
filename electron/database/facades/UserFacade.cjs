const db = require('../knex.cjs')

class UserFacade {
  static async getUserByEmail(email){
    try {
      const user = await db('users').where('email', email).first()
      return user || null;
    } catch (error) {
      return {error: true, message: `[UserFacade]: ${error.message || 'Unexpected error'}`}
    }
  }
}
// UserFacade.getUserByEmail('Kevin44@yahoo.com').then(res => console.log(res))
module.exports = UserFacade