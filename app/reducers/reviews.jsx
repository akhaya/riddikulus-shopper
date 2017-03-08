import axios from 'axios'


/* -------------- CONSTANTS ------------- */
const RECEIVE_REVIEWS = 'RECEIVE_REVIEWS'
const RECEIVE_REVIEW = 'RECEIVE_REVIEW'

/* -------------- REDUCERS -------------- */
const reducer = (state=null, action) => {

  switch(action.type) {

  case RECEIVE_REVIEWS:
    return action.reviews

  case RECEIVE_REVIEW:
    const newReviews = Object.assign(state)
    newReviews.push(action.review)
    return newReviews;

  default:
    return state;
  }

}

/* ---------------- ACTION CREATORS -------------- */
export const receiveReviews = reviews => ({
  type: RECEIVE_REVIEWS,
  reviews
})

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
})

export const fetchReviews = productId => {
  return dispatch => {
    axios.get(`/api/reviews/product/${productId}`)
      .then(res => {
        dispatch(receiveReviews(res.data))
      }).catch(console.error)
  }
}

export const postReview = (review, productId) => {
  return dispatch => {
    axios.post(`/api/reviews/product/${productId}`, review)
      .then(newReview => {
        dispatch(receiveReview(newReview.data))
      }).catch(console.error)
  }
}

export default reducer
