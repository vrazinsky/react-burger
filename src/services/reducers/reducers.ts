import {
    ADD_BUN_TO_CONSTRUCTOR,
    REMOVE_BUN_FROM_CONSTRUCTOR,
    ADD_CURRENT_INGREDIENT,
    ADD_INNER_INGREDIENT_TO_CONSTRUCTOR,
    REMOVE_CURRENT_INGREDIENT,
    CHANGE_INNER_INGREDIENTS,
    REMOVE_ORDER_DETAILS,
    GET_INGREDIENTS,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_SUCCESS,
    GET_ORDER_DETAILS_SUCCESS,
    GET_ORDER_DETAILS,
    GET_ORDER_DETAILS_FAILED,
    INCREASE_INGREDIENT_COUNTER,
    DECREASE_INGREDIENT_COUNTER,
    CLEAR_INGREDIENT_COUNTER
} from '../../utils/action-types'
import { TIngredientsInitialState, TConstructorItemsInitialState, TCurrentIngredientInitialState, TOrderDetailsInitialState } from '../../types/types'

import { TGetIngredientsActions, TConstructorItemsActions, TCurrentIngredientActions, TOrderDetailsActions, TIngredientCountersActions } from '../actions/actions'



const ingredientsInitialState: TIngredientsInitialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false
}
const constructorItemsInitialState: TConstructorItemsInitialState = {
    constructorIngredients: { bun: null, innerIngredients: [] }
}

const currentIngredientInitialState: TCurrentIngredientInitialState = {
    currentIngredient: null
}

const orderDetailsInitialState: TOrderDetailsInitialState = {
    orderDetails: null,
    orderDetailsRequest: false,
    orderDetailsFailed: false
}

type TIngredientCountersState = { [name: string]: number }

const ingredientCountersState: TIngredientCountersState = {
}


export const ingredientsReducer = (state = ingredientsInitialState, action: TGetIngredientsActions): TIngredientsInitialState => {
    switch (action.type) {
        case GET_INGREDIENTS_SUCCESS:
            return {
                ...state,
                ingredientsRequest: false,
                ingredients: action.payload
            }
        case GET_INGREDIENTS:
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false
            }
        case GET_INGREDIENTS_FAILED:
            return {
                ingredientsRequest: false,
                ingredientsFailed: true,
                ingredients: []

            }
        default:
            return state
    }
}

export const constructorItemsReducer = (state = constructorItemsInitialState, action: TConstructorItemsActions): TConstructorItemsInitialState => {
    switch (action.type) {
        case ADD_INNER_INGREDIENT_TO_CONSTRUCTOR:
            return {
                ...state,
                constructorIngredients: {
                    ...state.constructorIngredients,
                    innerIngredients: [...state.constructorIngredients.innerIngredients, action.payload]
                }
            }
        case ADD_BUN_TO_CONSTRUCTOR:
            return {
                ...state,
                constructorIngredients: {
                    ...state.constructorIngredients,
                    bun: action.payload
                }
            }
        case CHANGE_INNER_INGREDIENTS:
            return {
                ...state,
                constructorIngredients: {
                    ...state.constructorIngredients,
                    innerIngredients: action.payload
                }
            }
        case REMOVE_BUN_FROM_CONSTRUCTOR:
            return {
                ...state,
                constructorIngredients: {
                    ...state.constructorIngredients,
                    bun: null
                }
            }
        default:
            return state;
    }
}

export const currentIngredientReducer = (state = currentIngredientInitialState, action: TCurrentIngredientActions): TCurrentIngredientInitialState => {
    switch (action.type) {
        case ADD_CURRENT_INGREDIENT:
            return {
                currentIngredient: action.payload
            }
        case REMOVE_CURRENT_INGREDIENT:
            return {
                currentIngredient: null
            }
        default:
            return state;
    }
}

export const orderDetailsReducer = (state = orderDetailsInitialState, action: TOrderDetailsActions): TOrderDetailsInitialState => {
    switch (action.type) {
        case GET_ORDER_DETAILS_SUCCESS:
            return {
                ...state,
                orderDetailsRequest: false,
                orderDetails: action.payload
            }
        case GET_ORDER_DETAILS:
            return {
                ...state,
                orderDetailsRequest: true,
                orderDetailsFailed: false
            }
        case GET_ORDER_DETAILS_FAILED:
            return {
                orderDetailsRequest: false,
                orderDetailsFailed: true,
                orderDetails: null
            }
        case REMOVE_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: null
            }
        default:
            return state
    }
}

export const ingredientCountersReducer = (state = ingredientCountersState, action: TIngredientCountersActions) => {
    switch (action.type) {
        case INCREASE_INGREDIENT_COUNTER:
            return {
                ...state,
                [action.payload]: state[action.payload] ? (state[action.payload] + 1) : 1
            }
        case DECREASE_INGREDIENT_COUNTER:
            return {
                ...state,
                [action.payload]: state[action.payload] - 1
            }
        case CLEAR_INGREDIENT_COUNTER:
            return {}
        default:
            return state
    }
}