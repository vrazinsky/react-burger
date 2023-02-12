import {
    ADD_BUN_TO_CONSTRUCTOR, 
    ADD_CURRENT_INGREDIENT,      
    ADD_INNER_INGREDIENT_TO_CONSTRUCTOR, 
    ADD_ORDER_DETAILS, 
    REMOVE_CURRENT_INGREDIENT, 
    REMOVE_INNER_INGREDIENT_FROM_CONSTRUCTOR,
    REMOVE_ORDER_DETAILS,
    GET_INGREDIENTS,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_SUCCESS
} from '../../utils/action-types'

const ingredientsInitialState = {
    ingredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false
}
const constructorItemsInitialState =  {
    constructorIngredients: {bun: null, innerIngredients: []}
}

const currentIngredientInitialState = {
    currentIngredient: null
}

const orderDetailsInitialState = {
    orderDetails: null
}    


export const ingredientsReducer = (state = ingredientsInitialState, action) => {
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
            ...state,
            ingredientsRequest: false,
            ingredientsFailed: true
        }
    default:
        return state
    }
  } 

export const constructorItemsReducer = (state = constructorItemsInitialState, action) => {
    switch (action.type) {
        case ADD_INNER_INGREDIENT_TO_CONSTRUCTOR:
            return {
                ...state,
                constructorIngredients:{
                    ...state.constructorIngredients,
                    innerIngredients : [...state.constructorIngredients.innerIngredients, action.payload]
                }
            }
        case ADD_BUN_TO_CONSTRUCTOR:
            return {
                ...state,
                constructorIngredients:{
                    ...state.constructorIngredients,
                    bun : action.payload
                }
            }
        case REMOVE_INNER_INGREDIENT_FROM_CONSTRUCTOR:
            return {
                ...state,
                constructorIngredients:{
                    ...state.constructorIngredients,
                    innerIngredients : state.constructorIngredients.innerIngredients.filter(i => i._id === action.payload)
                }
            }
        default:
            return state;
    }
}

export const currentIngredientReducer = (state = currentIngredientInitialState, action) => {
    switch (action.type) {
        case ADD_CURRENT_INGREDIENT:
            return {
                ...state,
                currentIngredient: action.payload
            }
        case REMOVE_CURRENT_INGREDIENT:
            return {
                ...state,
                currentIngredient: null
            }
        default:
            return state;
    }
}

export const orderDetailsReducer = (state = orderDetailsInitialState, action) => {
    switch (action.type) {
        case ADD_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: action.payload
            }
        case REMOVE_ORDER_DETAILS:
            return {
                ...state,
                orderDetails: null
            }
        default:
            return state;
    }
}