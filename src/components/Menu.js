import React, { Component } from 'react';
//import {Link} from 'react-router'
//import addItemToPlate from '../action-creators/plate'


//todo: render a list of menu items + buttons to add them to your plate

export default class Menu extends Component {

  render () {
    return (
      <div>
        <h3>Menu</h3>
        <ul>
        {
          this.props.menu.map(item => (
            <li key={item.id}>
              <button onClick={() => this.props.addItem(item)}>{item.name}</button>
            </li>
          ))
          
        }
        </ul>
      </div>
    );
  }
}
