import React, { Component } from 'react';
import firebase from 'firebase';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggleClass = this.toggleClass.bind(this);
    this.state = {
      active: false,
      user: ''
    };
  }
    toggleClass() {
      this.setState({active: !this.state.active})
    }

    onSignOut(e) {
      e.preventDefault();
      console.log('booyah');
      firebase.auth().signOut()
        .then((result) => {
          console.log(result);
          this.setState({ user: null });
          console.log(this.state.user);
        });
    }

  render() {
    return (
    <header className="titleBar">
      <h1 className="title">WellMinder</h1>
      <div className="menu" onClick={this.toggleClass}><i className="fa fa-bars" aria-hidden="true"></i></div>
        <ul className = {this.state.active ? "dropdown active" : "dropdown inactive"}>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/checkin">Daily Check In</a></li>
          <li><a href="/preferences">User Preferences</a></li>
          { this.props.isLoggedIn ? <li><a href="#" onClick={this.onSignOut.bind(this)}>Sign out</a></li> : null }
        </ul>
    </header>
  )}
}

export default NavBar;
