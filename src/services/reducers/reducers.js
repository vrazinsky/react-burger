import {
    ADD_BUN_TO_CONSTRUCTOR, 
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
    orderDetails: null,
    orderDetailsRequest: false,
    orderDetailsFailed: false
}  

const ingredientCountersState = {    
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
            ingredientsRequest: false,
            ingredientsFailed: true,
            ingredients: []

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
        case CHANGE_INNER_INGREDIENTS:            
            return {
                ...state,
                constructorIngredients:{
                    ...state.constructorIngredients,
                    innerIngredients : action.payload
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

export const orderDetailsReducer = (state = orderDetailsInitialState, action) => {
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
                orderDetails: null
            }
      default:
          return state
      }
}

export const ingredientCountersReducer = (state = ingredientCountersState, action) => {    
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
        default: 
            return state
    }
}