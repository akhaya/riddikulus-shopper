import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AdminUsers from '../components/AdminUsers'
import {deleteUser, changeAdminStatus} from '../reducers/users'


const mapStateToProps = (state) => {
  return {
      users: state.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: function(userId) {
      dispatch(deleteUser(userId))
    },
    onAdminStatus: function(userId, evt) {
      console.log('In container with id', userId)
      evt.preventDefault()
      dispatch(changeAdminStatus(userId))
    }
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(AdminUsers)
