import React, {Component} from 'react'
import {connect} from 'react-redux'

export default (props) => {
  const user = props.user
  return (
      <tr>
        <th scope="row">{user.id}</th>
        <td>{user.email}</td>
        <td>{user.name}</td>
        <td>{user.isGuest? 'Yes' : 'No'}</td>
        <td>{user.isAdmin? 'Yes' : 'No'}<br/>
          {user.sAdmin? <a href="#">REVOKE ADMIN ACCESS</a>:<a href="#">GRANT ADMIN ACCESS</a>}
        </td>
        <td><a href="#">RESET PASSWORD</a></td>
        <td><a href="#">DEACTIVATE</a></td>
      </tr>
  )
}
