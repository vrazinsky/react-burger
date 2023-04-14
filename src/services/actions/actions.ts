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
import { TIngredient, TOrder } from '../../types/types'

export interface IAddBunToCunstructor {
    readonly type: typeof ADD_BUN_TO_CONSTRUCTOR;
    readonly payload: TIngredient
}

export interface IRemoveBunFromConstructor {
    readonly type: typeof REMOVE_BUN_FROM_CONSTRUCTOR;
}

export interface IAddCurrentIngredient {
    readonly type: typeof ADD_CURRENT_INGREDIENT;
    readonly payload: TIngredient
}

export interface IAddInnerIngredientToConstructor {
    readonly type: typeof ADD_INNER_INGREDIENT_TO_CONSTRUCTOR;
    readonly payload: TIngredient
}

export interface IRemoveCurrentIngredient {
    readonly type: typeof REMOVE_CURRENT_INGREDIENT;
}

export interface IChangeInnerIngredients {
    readonly type: typeof CHANGE_INNER_INGREDIENTS;
    readonly payload: Array<TIngredient>;
}

export interface IGetIngredients {
    readonly type: typeof GET_INGREDIENTS;
}

export interface IGetIngredientsSuccess {
    readonly type: typeof GET_INGREDIENTS_SUCCESS;
    readonly payload: Array<TIngredient>;
}

export interface IGetIngredientsFailed {
    readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IGetOrderDetails {
    readonly type: typeof GET_ORDER_DETAILS;
}

export interface IGetOrderDetailsSuccess {
    readonly type: typeof GET_ORDER_DETAILS_SUCCESS;
    readonly payload: TOrder | undefined;
}

export interface IGetOrderDetailsFailed {
    readonly type: typeof GET_ORDER_DETAILS_FAILED;
}

export interface IRemoveOrderDetails {
    readonly type: typeof REMOVE_ORDER_DETAILS;
}

export interface IIncreaseIngredientCounter {
    readonly type: typeof INCREASE_INGREDIENT_COUNTER;
    readonly payload: string;
}

export interface IDecreaseIngredientCounter {
    readonly type: typeof DECREASE_INGREDIENT_COUNTER;
    readonly payload: string;
}

export interface IClearIngredientCounter {
    readonly type: typeof CLEAR_INGREDIENT_COUNTER;
}

export type TGetIngredientsActions =
    | IGetIngredients
    | IGetIngredientsFailed
    | IGetIngredientsSuccess;

export type TConstructorItemsActions =
    | IAddInnerIngredientToConstructor
    | IAddBunToCunstructor
    | IChangeInnerIngredients
    | IRemoveBunFromConstructor;

export type TCurrentIngredientActions =
    | IAddCurrentIngredient
    | IRemoveCurrentIngredient;

export type TOrderDetailsActions =
    | IGetOrderDetails
    | IGetOrderDetailsFailed
    | IGetOrderDetailsSuccess
    | IRemoveOrderDetails;

export type TIngredientCountersActions =
    | IIncreaseIngredientCounter
    | IDecreaseIngredientCounter
    | IClearIngredientCounter;



export function addBunToCunstructor(bun: TIngredient): IAddBunToCunstructor {
    return {
        type: ADD_BUN_TO_CONSTRUCTOR,
        payload: bun
    }
}

export function removeBunFromConstructor(): IRemoveBunFromConstructor {
    return {
        type: REMOVE_BUN_FROM_CONSTRUCTOR
    }
}

export function addCurrentIngredient(ingredient: TIngredient): IAddCurrentIngredient {
    return {
        type: ADD_CURRENT_INGREDIENT,
        payload: ingredient
    }
}

export function addInnerIngredientToConstructor(ingredient: TIngredient): IAddInnerIngredientToConstructor {
    return {
        type: ADD_INNER_INGREDIENT_TO_CONSTRUCTOR,
        payload: ingredient
    }
}

export function removeCurrentIngredient(): IRemoveCurrentIngredient {
    return {
        type: REMOVE_CURRENT_INGREDIENT,

    }
}

export function changeInnerIngredients(innerIngredients: Array<TIngredient>): IChangeInnerIngredients {
    return {
        type: CHANGE_INNER_INGREDIENTS,
        payload: innerIngredients
    }
}

export function getIngredients(): IGetIngredients {
    return {
        type: GET_INGREDIENTS
    }
}

export function getIngredientsSuccess(data: Array<TIngredient> = []): IGetIngredientsSuccess {
    return {
        type: GET_INGREDIENTS_SUCCESS,
        payload: data
    }
}

export function getIngredientsFailed(): IGetIngredientsFailed {
    return {
        type: GET_INGREDIENTS_FAILED
    }
}

export function getOrderDetails(): IGetOrderDetails {
    return {
        type: GET_ORDER_DETAILS
    }
}

export function getOrderDetailsSuccess(data: TOrder | undefined): IGetOrderDetailsSuccess {
    return {
        type: GET_ORDER_DETAILS_SUCCESS,
        payload: data
    }
}

export function getOrderDetailsFailed(): IGetOrderDetailsFailed {
    return {
        type: GET_ORDER_DETAILS_FAILED
    }
}

export function removeOrderDetails(): IRemoveOrderDetails {
    return {
        type: REMOVE_ORDER_DETAILS
    }
}

export function increaseIngredientCounter(id: string): IIncreaseIngredientCounter {
    return {
        type: INCREASE_INGREDIENT_COUNTER,
        payload: id
    }
}

export function decreaseIngredientCounter(id: string): IDecreaseIngredientCounter {
    return {
        type: DECREASE_INGREDIENT_COUNTER,
        payload: id
    }
}

export function clearIngredientCounter(): IClearIngredientCounter {
    return {
        type: CLEAR_INGREDIENT_COUNTER
    }
}