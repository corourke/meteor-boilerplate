import React from 'react'
import { Redirect } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'

import Header from './Header'

export default class Dashboard extends React.Component {

  render() {
    if(Meteor.userId() == null) {
      return <Redirect to="/login" />
    }
    return (
      <div>
        <Header>Dashboard</Header>
      </div>
    )
  }
}
