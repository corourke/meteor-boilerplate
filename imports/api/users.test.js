import { Meteor } from 'meteor/meteor'
import expect from 'expect'

import { validateUser } from './users'

if(Meteor.isServer) {
  describe('api/users', function() {
    it('should allow valid email', function() {
      const user1 = {
        email: 'cameron.orourke@gmail.com',
        password: 'asdfgh',
      }
      expect(validateUser(user1)).toBe(true)
    })

    it('should reject invalid email', function() {
      const user2 = {
        email: 'cameron.orourke@gmail',
        password: 'asdfgh',
      }
      expect(validateUser(user2)).toBe(false)
    })

    it('should reject a short password',function() {
      const user3 = {
        email: 'cameron.orourke@gmail.com',
        password: 'asdf',
      }
      expect(validateUser(user3)).toBe(false)
    })
  })
}
