
const CartReducer = (state,action) => {
  switch(action.type){
    case 'add':
        return [...state,action.product]
    case 'remove':
        return state.filter(product => product.id !== action.id)

    case 'increase':
        return state.map(product => 
            product.id === action.id && product.quantity < 10 ?
            {...product,quantity: product.quantity +1}
            : product
        )

    case 'decrease':
        return state.map(product => 
            product.id === action.id && product.quantity > 1 ?
            {...product,quantity: product.quantity -1}
            : product
        )

    default:
        state;
  }
}

export default CartReducer