import { compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from '../services/reducers/rootReducer'
import { TOrder } from '../types/types'
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ActionCreator } from 'redux';
import { TConstructorItemsActions, TCurrentIngredientActions, TGetIngredientsActions, TIngredientCountersActions, TOrderDetailsActions } from '../services/actions/actions'
import { TAddReturnUrlActions, TAuthActions, TResetPasswordActions, TSendResetEmailActions } from '../services/actions/auth-actions'

const composeEnhancers = (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk));

export const store = createStore(rootReducer, enhancer)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunkDispatch = ThunkDispatch<RootState, any, TConstructorItemsActions | TCurrentIngredientActions | TGetIngredientsActions | TIngredientCountersActions | TOrderDetailsActions
    | TAddReturnUrlActions | TAuthActions | TResetPasswordActions | TSendResetEmailActions>;
// export type AppDispatch = Dispatch<TConstructorItemsActions | TCurrentIngredientActions | TGetIngredientsActions | TIngredientCountersActions | TOrderDetailsActions
//     | TAddReturnUrlActions | TAuthActions | TResetPasswordActions | TSendResetEmailActions>
export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, RootState, any, TConstructorItemsActions | TCurrentIngredientActions | TGetIngredientsActions | TIngredientCountersActions | TOrderDetailsActions
        | TAddReturnUrlActions | TAuthActions | TResetPasswordActions | TSendResetEmailActions>
>;



export const getAuth = (store: RootState) => store.authReducer
export const getOrderDetails = (store: RootState) => store.orderDetailsReducer as { orderDetails: TOrder, orderDetailsRequest: boolean }
export const getConstructorIngredients = (store: RootState) => store.constructorItemsReducer.constructorIngredients
export const getIngredients = (store: RootState) => store.ingredientsReducer.ingredients
export const getCountInfo = (store: RootState) => store.ingredientCountersReducer as { [name: string]: number }
export const getReturnUrl = (store: RootState) => store.returnUrlReducer.url
export const getResetEmail = (store: RootState) => store.sendResetEmailReducer