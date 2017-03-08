import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postReview} from '../reducers/reviews'

class ReviewFormContainer extends Component {
  constructor(props){
    super(props)
    this.state={
      rating: 1,
      body:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    const name=e.target.name
    const value=e.target.value
    this.setState({[name]: value})
  }
  handleSubmit(e){
    e.preventDefault()
    this.props.postReview({
      rating: this.state.rating,
      body: this.state.body,
      user_id: this.props.user.id,
      product_id: this.props.product.id
    }, this.props.product.id )
    this.setState({
      rating: 1,
      body:''
    })
  }

  render(){
    const ratings = [1,2,3,4,5]
    return(
      <div>
        <form className="form-horizontal" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label className="col-sm-2 control-label">Rating</label>
            <div className="col-sm-10">
              <select name="rating" value={this.state.rating} onChange={this.handleChange}>
                {ratings.map(rating => <option key={rating} value={rating}>{rating}</option>)}
              </select>
            </div>
          </div>
          <div className="form-group">
            <label className="col-sm-2 control-label">Review</label>
            <div className="col-sm-10">
              <textarea className="form-control" rows="3" name="body"
                onChange={this.handleChange}
                value={this.state.body}></textarea>
            </div>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="submit" className="btn btn-default">Post Review</button>
            </div>
          </div>
        </form>
      </div>
  )
  }
}

const mapStateToProps = state =>{
  return {
    user: state.auth,
    product: state.product
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    postReview(review, productId){
      dispatch(postReview(review, productId))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ReviewFormContainer)
