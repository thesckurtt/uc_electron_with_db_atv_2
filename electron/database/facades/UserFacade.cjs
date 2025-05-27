const db = require('../knex.cjs')

class UserFacade {
  static async getUserByEmail(email){
    try {
      const response = await db('users').where('email', email).first()
      if(!response){
        return {error: true, message: 'User not found!'}
      }
      return {error: false, user: response}
    } catch (error) {
      return {error: true}
    }
  }
}
UserFacade.getUserByEmail('Ayana.Tromp61@yahoo.com').then(res => console.log(res))
module.exports = UserFacade