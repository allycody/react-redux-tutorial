import React, { Component } from 'react';
import {Link} from 'react-router'

export default class App extends Component {

  render () {
    return (
      <div>
        <h1>My Plate App</h1>
        <ul>
          {/* todo: there should be two links here, one to your menu and one to your plate*/}
          <li><Link to='menu'>MENU</Link></li>
          <li><Link to='plate'>PLATE</Link></li>
        </ul>
        <div>
           {/* todo: this is where either menu or plate should render, depending on the url*/}
           {this.props.children}
        </div>
      </div>
    );
  }
}
