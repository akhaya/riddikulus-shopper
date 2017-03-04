import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import UserRow from './UserRow'

export default (props) => {
  return (
      <div className="container-fluid">
        <div className="row">
          Add a new user here!
        </div>
        <div className="row">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Name</th>
                <th>Guest</th>
                <th>Admin</th>
                <th>Password Reset</th>
                <th>Deactivate?</th>
              </tr>
            </thead>
            <tbody>
              {props.users && props.users.map(user=> <UserRow user={user} key={user.id} />)}
            </tbody>
          </table>
        </div>
      </div>
  )
}
