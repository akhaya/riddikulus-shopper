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
            <a target="_self" onClick={(evt) => props.onAdminStatus(user.id, evt)}>
              {user.isAdmin? "REVOKE ADMIN ACCESS" : "GRANT ADMIN ACCESS" }
            </a>
        </td>
        <td><a href="#">RESET PASSWORD</a></td>
        <td>{user.status}</td>
        <td><a href="#" target="_self" onClick={() => props.onDelete(user.id)}>DEACTIVATE</a></td>
      </tr>
  )
}
