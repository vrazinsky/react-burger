import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../services/reducers/rootReducer'
import { TOrder } from '../types/types'

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const getAuth = (store: RootState) => store.authReducer
export const getOrderDetails = (store: RootState) => store.orderDetailsReducer as { orderDetails: TOrder, orderDetailsRequest: boolean }
export const getConstructorIngredients = (store: RootState) => store.constructorItemsReducer.constructorIngredients
export const getIngredients = (store: RootState) => store.ingredientsReducer.ingredients
export const getCountInfo = (store: RootState) => store.ingredientCountersReducer as { [name: string]: number }
export const getReturnUrl = (store: RootState) => store.returnUrlReducer.url
export const getResetEmail = (store: RootState) => store.sendResetEmailReducer