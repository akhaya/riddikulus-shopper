import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import AdminUsers from '../components/AdminUsers'

export default connect (
  state => {
    return {
      users: state.users
    }
  }
)(AdminUsers)
