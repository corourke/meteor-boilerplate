import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Meteor } from 'meteor/meteor'
import { Button, Nav, Navbar, NavItem, PageHeader} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


class Header extends React.Component {
  renderRightMenu() {
    if(Meteor.userId()) {
      return (
        <Button onClick={ () => Meteor.logout(() => this.props.history.push('/login')) }>
          Log Out
        </Button>
      )
    }
  }
  render() {
    return (
      <div>
        <Navbar fluid style={{backgroundColor: '#5E3DA6'}}>
          <Navbar.Header>
            <Navbar.Brand>Short-Lnk</Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Form pullRight style={{paddingRight: '0px'}}>
            { this.renderRightMenu() }
          </Navbar.Form>

        </Navbar>

        <PageHeader>{this.props.children}</PageHeader>
      </div>
    )
  }
}

export default withRouter(Header)

Header.propTypes = {
  history: PropTypes.object.isRequired,
  children: PropTypes.node,
}
