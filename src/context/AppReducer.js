export default (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                Cart: [action.payload, ...state.Cart]
            }

        case "DELETE_FROM_CART":
            return {
                ...state,
                Cart: state.Cart.filter((product) => product.id != action.payload)
            }
        case "CHECK_OUT":
            return{
                ...state,
                Cart:action.payload
            }
        default:
            return state
    }
}