// root reducer jo saab reducer ko aik bana ke store be snd kar de ga 

import cartItems from './reducer'
import { combineReducers } from 'redux'

export default combineReducers({
    cartItems
})