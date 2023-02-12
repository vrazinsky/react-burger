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

export function addBunToCunstructor(bun) {
    return {
        type: ADD_BUN_TO_CONSTRUCTOR,
        payload: bun
    }
}

export function addCurrentIngredient(ingredient) {
    return {
        type: ADD_CURRENT_INGREDIENT,
        payload: ingredient
    }
}

export function addInnerIngredientToConstructor(ingredient) {
    return {
        type: ADD_INNER_INGREDIENT_TO_CONSTRUCTOR,
        payload: ingredient
    }
}

export function addOrderDetails(orderDetails) {
    return {
        type: ADD_ORDER_DETAILS,
        payload: orderDetails
    }
}

export function removeCurrentIngredient() {
    return {
        type: REMOVE_CURRENT_INGREDIENT, 

    }
}

export function removeInnerIngredientToConstructor(ingredient) {
    return {
        type: REMOVE_INNER_INGREDIENT_FROM_CONSTRUCTOR
    }
}

export function removeOrderDetails() {
    return {
        type: REMOVE_ORDER_DETAILS, 
    }
}

export function getIngredients() {
    return {
        type:GET_INGREDIENTS
    }
}

export function getIngredientsSuccess(data) {   
    return {
        type: GET_INGREDIENTS_SUCCESS,
        payload: data
    }
}

export function getIngredientsFailed() {
    return {
        type:GET_INGREDIENTS_FAILED
    }
}

