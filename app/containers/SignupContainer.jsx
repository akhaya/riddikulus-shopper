import React, {Component} from 'react'
import {connect} from 'react-redux'
import Signup from '../components/Signup'
import axios from 'axios'

 let newUser = {
      name: '',
      email: '',
      password: ''
    };

class SignupContainer extends React.Component {

  constructor(props){
    super(props)

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    // this.handlePassword2Change = this.handlePassword2Change.bind(this)


    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleNameChange(evt){
    const value = evt.target.value;
    console.log(value)
    newUser.name = value
  }

  handleEmailChange(evt){
    const value = evt.target.value;
    newUser.email = value
  }

  handlePasswordChange(evt){
    const value = evt.target.value;
    newUser.password = value;
  }

  // handlePassword2Change(evt){
  //   const value = evt.target.value;
  //   newUser.password2 = value;
  // }

  handleSubmit(evt){
    evt.preventDefault();
    axios.post('/api/users', newUser)

  }


  render(){

    return (

      <Signup
        handleNameChange={this.handleNameChange}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        handleSubmit={this.handleSubmit}
      />

    )

  }


}

export default SignupContainer
