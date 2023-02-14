import { combineReducers } from 'redux';
import { constructorItemsReducer, currentIngredientReducer, ingredientsReducer, orderDetailsReducer, ingredientCountersReducer } from './reducers'

export const rootReducer = combineReducers({
    constructorItemsReducer,
    currentIngredientReducer,
    ingredientsReducer,
    orderDetailsReducer,
    ingredientCountersReducer
}) 