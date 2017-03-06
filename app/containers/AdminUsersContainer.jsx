import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AdminUsers from '../components/AdminUsers'
import deleteUser from '../reducers/users'


const mapStateToProps = (state) => {
  return {
      users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: function(userId) {
        dispatch(deleteUser(userId))
      }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AdminUsers)
