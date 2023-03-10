import {
    ADD_BUN_TO_CONSTRUCTOR,
    REMOVE_BUN_FROM_CONSTRUCTOR,
    ADD_CURRENT_INGREDIENT,
    ADD_INNER_INGREDIENT_TO_CONSTRUCTOR,
    REMOVE_CURRENT_INGREDIENT,
    CHANGE_INNER_INGREDIENTS,
    GET_INGREDIENTS,
    GET_INGREDIENTS_FAILED,
    GET_INGREDIENTS_SUCCESS,
    GET_ORDER_DETAILS,
    GET_ORDER_DETAILS_FAILED,
    GET_ORDER_DETAILS_SUCCESS,
    REMOVE_ORDER_DETAILS,
    INCREASE_INGREDIENT_COUNTER,
    DECREASE_INGREDIENT_COUNTER,
    CLEAR_INGREDIENT_COUNTER
} from '../../utils/action-types'

export function addBunToCunstructor(bun) {
    return {
        type: ADD_BUN_TO_CONSTRUCTOR,
        payload: bun
    }
}

export function removeBunFromConstructor() {
    return {
        type: REMOVE_BUN_FROM_CONSTRUCTOR,

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

export function removeCurrentIngredient() {
    return {
        type: REMOVE_CURRENT_INGREDIENT,

    }
}

export function changeInnerIngredients(innerIngredients) {
    return {
        type: CHANGE_INNER_INGREDIENTS,
        payload: innerIngredients
    }
}

export function getIngredients() {
    return {
        type: GET_INGREDIENTS
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
        type: GET_INGREDIENTS_FAILED
    }
}

export function getOrderDetails() {
    return {
        type: GET_ORDER_DETAILS
    }
}

export function getOrderDetailsSuccess(data) {
    return {
        type: GET_ORDER_DETAILS_SUCCESS,
        payload: data
    }
}

export function getOrderDetailsFailed() {
    return {
        type: GET_ORDER_DETAILS_FAILED
    }
}

export function removeOrderDetails() {
    return {
        type: REMOVE_ORDER_DETAILS
    }
}

export function increaseIngredientCounter(id) {
    return {
        type: INCREASE_INGREDIENT_COUNTER,
        payload: id
    }
}

export function decreaseIngredientCounter(id) {
    return {
        type: DECREASE_INGREDIENT_COUNTER,
        payload: id
    }
}

export function clearIngredientCounter() {
    return {
        type: CLEAR_INGREDIENT_COUNTER
    }
}