import { combineReducers } from 'redux';
import { constructorItemsReducer, currentIngredientReducer, ingredientsReducer, orderDetailsReducer, ingredientCountersReducer } from './reducers'
import { authReducer, returnUrlReducer, sendResetEmailReducer, resetPasswordReducer } from './auth-reducers'
import { wsFeedReducer, wsOrdersReducer } from './socket-reducers'

export const rootReducer = combineReducers({
    constructorItemsReducer,
    currentIngredientReducer,
    ingredientsReducer,
    orderDetailsReducer,
    ingredientCountersReducer,
    authReducer,
    returnUrlReducer,
    sendResetEmailReducer,
    resetPasswordReducer,
    wsFeedReducer,
    wsOrdersReducer
}) 