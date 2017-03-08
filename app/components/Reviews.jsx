import React from 'react'
import SingleReview from './SingleReview'
import ReviewFormContainer  from '../containers/ReviewFormContainer'

export default (props) =>{
  const avg = Math.floor((props.reviews.reduce(function(curr, next){return curr + next.rating}, 0)/props.reviews.length))
  console.log(props.user)
  return (
    <div className="container-fluid">
      <h4>Average Rating: {avg} </h4>
      {props.reviews.map(review => <SingleReview key={review.id} review={review} />)}
      {props.user? <ReviewFormContainer /> : null}
    </div>

  )
}
