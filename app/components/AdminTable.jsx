import React from 'react'

export default (props) => {
  const headers = props.headers;
  return (
      <div className="row">
        <table className="table table-hover">
          <thead>
            <tr>
              {headers.map(header => <th key={header}>{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {props.children}
          </tbody>
        </table>
      </div>
  )
}
