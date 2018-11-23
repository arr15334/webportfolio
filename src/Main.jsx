import React from 'react';
import AppRouter from './AppRouter.jsx';
// import App from './App.jsx';

export default class Main extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        display: 0
      }
    }
    render() {
      return (
        <div>
          <AppRouter/>
        </div>
      )
    }
  }