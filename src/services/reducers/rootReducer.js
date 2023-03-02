import { combineReducers } from 'redux';
import { constructorItemsReducer, currentIngredientReducer, ingredientsReducer, orderDetailsReducer, ingredientCountersReducer } from './reducers'
import { authReducer, returnUrlReducer, passwordResetReducer, resetPasswordReducer } from './auth-reducers'

export const rootReducer = combineReducers({
    constructorItemsReducer,
    currentIngredientReducer,
    ingredientsReducer,
    orderDetailsReducer,
    ingredientCountersReducer,
    authReducer,
    returnUrlReducer,
    passwordResetReducer,
    resetPasswordReducer
}) 