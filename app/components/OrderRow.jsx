import React, {Component} from 'react'
import {connect} from 'react-redux'

//made a smart component to keep track of order status updates
export default class OrderRow extends Component {
  constructor(props){
    super(props)
    this.state = {
      status: props.order.status,
      updateMessage: null
    }
    this.handleSubmit = props.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillReceiveProps(nextProps){
    //check if order has changed and if it changed to the set state
    if(nextProps.order.status!==this.props.order.status && nextProps.order.status===this.state.status ){
      this.setState({updateMessage:'Successfully updated!'})
    }
  }

  handleChange(evt){
    const newStatus=evt.target.value;
    this.setState({status: newStatus})
  }
  render() {
    const order = this.props.order
    const statuses = ['pending', 'processing', 'shipped', 'delivered']
    return (
      <tr>
        <th scope="row">{order.id}</th>
        <td>{order.user_id}</td>
        <td>{order.created_at.slice(0, 10)}</td>
        <td>{order.totalCost}</td>
        <td>
        <form onSubmit={(evt) => this.handleSubmit(order.id, this.state.status, evt)}>
          <select value={this.state.status} onChange={this.handleChange}>
            {statuses.map(status => <option key={status} value={status}>{status}</option>)}
          </select>
          <button className="btn btn-default" type="submit">Update</button>
        </form>
        {this.state.updateMessage? <span>{this.state.updateMessage}</span> : null}
        </td>
        <td><a href="#" target="_self">DETAILS</a></td>
        <td><a href="#" target="_self" onClick={() => this.props.onDelete(order.id)}>DELETE</a></td>
      </tr>
  )}
}
