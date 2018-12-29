import { Meteor } from 'meteor/meteor'
import { WebApp } from 'meteor/webapp'

import { setServerUserValidation } from '../imports/api/users'
import '../imports/startup/simple-schema-configuration.js'


Meteor.startup(() => {
  // code to run on server at startup
  setServerUserValidation()
})
