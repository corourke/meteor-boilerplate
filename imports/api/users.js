import { Accounts } from 'meteor/accounts-base'
import { Tracker } from 'meteor/tracker'
import SimpleSchema from 'simpl-schema'

SimpleSchema.debug = true

export const schema = new SimpleSchema({
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.EmailWithTLD,
  },
  password: {
    type: String,
    min: 6,
  },
  fullName: {
    type: String,
    optional: true,
  },
}, {
  clean: {
    filter: true,
    mutate: true,
    trimStrings: true,
    removeEmptyStrings: false,
  },
}, { tracker: Tracker })

const ValidationContext = schema.namedContext('userContext')

export function getValidationContext() {
  return ValidationContext
}

export function validateUser(user) {
  return ValidationContext.validate(user)
}

// --- Server Side --- //
// called from server/main.js
// The user object is the Mongo document
export function setServerUserValidation() {
  Accounts.validateNewUser(validateUser)
  return true
}
