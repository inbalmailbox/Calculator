import React, { Component } from 'react';
import { Route } from 'react-router';
import { Calcs } from './components/Calculator/Calcs';


import './custom.css'


export default class App extends Component {
  static displayName = App.name;

  render () {
      return (
        <Calcs />
      
    );
  }
}
