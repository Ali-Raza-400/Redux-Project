// root reducer jo saab reducer ko aik bana ke store be snd kar de ga 

import {combineReducers} from 'redux'
import cardItems from './reducer'

export default combineReducers({
    cardItems,
})