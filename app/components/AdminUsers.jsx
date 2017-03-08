import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router'
import UserRow from './UserRow'
import AdminTable from './AdminTable'

export default (props) => {
  const headers = ['ID', 'Email', 'Name', 'Guest', 'Admin', 'Password Reset', 'Status', 'Deactivate?']
  return (
      <div className="container-fluid">
        <AdminTable headers={headers}>
          {props.users && props.users.map(user =>
            <UserRow
              user={user}
              key={user.id}
              onDelete={props.deleteUser}
              onAdminStatus={props.onAdminStatus}
              />
            )}
        </AdminTable>
      </div>
  )
}
