import React, { Component } from 'react';

//todo: render a list items that have been added to your plate

export default class Plate extends Component {

  render () {
    console.log('plate: ', this.props.plate)
    return (
      <div>
        <h3>Plate</h3>
        <ul>
          {
          this.props.plate.map(item => (
            <li>
              <button>{item.name}</button>
            </li>
          )) 
        }
        </ul>
      </div>
    );
  }
}