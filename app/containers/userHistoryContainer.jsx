import React, { Component } from 'react'
import {connect} from 'react-redux'
import {receiveUser} from '../reducers/users'


class userHistoryContainer extends Component {
  constructor(props){
    super(props)
  }


  render(){
    console.log("**** user **** ",this.props.user)
    return(
      <h1> Past Orders: </h1>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    usersOrderHistory(userId){
      dipatch(getUserOrderHistory(userId))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(userHistoryContainer)

