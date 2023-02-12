import { combineReducers } from 'redux';
import { constructorItemsReducer, currentIngredientReducer, ingredientsReducer, orderDetailsReducer } from './reducers'

export const rootReducer = combineReducers({
    constructorItemsReducer,
    currentIngredientReducer,
    ingredientsReducer,
    orderDetailsReducer
}) 