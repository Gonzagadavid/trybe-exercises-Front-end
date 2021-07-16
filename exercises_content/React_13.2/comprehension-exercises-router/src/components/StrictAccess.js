import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'


class StrictAccess extends Component {
  constructor() {
    super() 
    this.acessDeniedAlert = this.acessDeniedAlert.bind(this)
    
  }

  acessDeniedAlert(bool) {
    if(bool) alert('Acess denied')
  }

  render() {
    const { user } = this.props
    const { username, password } = user
    const checkUser = username === 'joao' && password === '1234'
    return (
      <div>
        {this.acessDeniedAlert(!checkUser)}
        {checkUser ? <p> Welcome joao!" </p> : <Redirect to='/'/> }
        
      </div>
    );
  }
}

export default StrictAccess;