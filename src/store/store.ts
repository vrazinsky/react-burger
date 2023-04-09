import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../services/reducers/rootReducer'
import { TOrder } from '../types/types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { TConstructorItemsActions, TCurrentIngredientActions, TGetIngredientsActions, TIngredientCountersActions, TOrderDetailsActions } from '../services/actions/actions'
import { TAddReturnUrlActions, TAuthActions, TResetPasswordActions, TSendResetEmailActions } from '../services/actions/auth-actions'
import { TWSFeedActions, TWSOrdersActions } from '../services/actions/socket-actions'
import { socketMiddleware } from '../middlewares/socket-middleware'
import { WsFeedActions, WsOrdersActions } from '../utils/action-types'


const wsFeedUrl = 'wss://norma.nomoreparties.space/orders/all'
const wsOrdersUrl = 'wss://norma.nomoreparties.space/orders'


const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(socketMiddleware(wsFeedUrl, WsFeedActions, false)),
    applyMiddleware(socketMiddleware(wsOrdersUrl, WsOrdersActions, true)));


export const store = createStore(rootReducer, enhancer)

type TAppActions = | TConstructorItemsActions | TCurrentIngredientActions | TGetIngredientsActions | TIngredientCountersActions | TOrderDetailsActions
    | TAddReturnUrlActions | TAuthActions | TResetPasswordActions | TSendResetEmailActions | TWSFeedActions | TWSOrdersActions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, TAppActions>;
export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, RootState, any, TAppActions>
>;



export const getAuth = (store: RootState) => store.authReducer
export const getOrderDetails = (store: RootState) => store.orderDetailsReducer as { orderDetails: TOrder, orderDetailsRequest: boolean }
export const getConstructorIngredients = (store: RootState) => store.constructorItemsReducer.constructorIngredients
export const getIngredients = (store: RootState) => store.ingredientsReducer.ingredients
export const getCountInfo = (store: RootState) => store.ingredientCountersReducer as { [name: string]: number }
export const getReturnUrl = (store: RootState) => store.returnUrlReducer.url
export const getResetEmail = (store: RootState) => store.sendResetEmailReducer