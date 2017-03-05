import axios from 'axios'


/* -------------- CONSTANTS ------------- */
const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS'
const RECEIVE_PRODUCT = 'RECEIVE_PRODUCT'


const initialProductsState = {
  selected: {},
  list: []
}

/* -------------- REDUCERS -------------- */
const reducer = (state=initialProductsState, action) => {

  const newState = Object.assign({}, state);

  switch(action.type) {

  case RECEIVE_PRODUCTS:
    newState.list = actions.products
    break;

  case RECEIVE_PRODUCT:
    newState.selected = action.product

  default:
    return state;
  }

  return newState

}


/* ---------------- ACTION CREATORS -------------- */
export const receiveProducts = products => ({
  type: RECEIVE_PRODUCTS,
  products
})

export const receiveProduct = product => ({
  type: RECEIVE_PRODUCT,
  product
})


export default reducer
