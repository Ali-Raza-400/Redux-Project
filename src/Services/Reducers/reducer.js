import { ADD_TO_CART } from "../constant";
const initialState={
    cardData:[]
}
export default cartItems=(state=initialState,action)=>{

    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state,
                cardData:data
            }
            break
            default:
                return state

    }
}