import {getIngredients, getIngredientsFailed, getIngredientsSuccess, getOrderDetails, getOrderDetailsFailed, getOrderDetailsSuccess } from '../actions/actions'
import { getIngredientsRequest, getOrderDetailsRequest  } from '../../utils/burger-api'

export function getIngredientsThunk() {
    return function (dispatch) {
        dispatch(getIngredients())
        getIngredientsRequest()
        .then(res => {
            if (res && res.success) {
                dispatch(getIngredientsSuccess(res.data))
            }else {
                dispatch(getIngredientsFailed())
            }
        })
        .catch(err => {       
            dispatch(getIngredientsFailed())
        })
    }
}

export function getOrderDetailsThunk(ids) {
    return function (dispatch) {
        dispatch(getOrderDetails())
        getOrderDetailsRequest(ids)
       .then(res => {
            if (res && res.success) {
                dispatch(getOrderDetailsSuccess(res.order))
            }else {
                dispatch(getOrderDetailsFailed())
            }
        })
        .catch( err => {       
            dispatch(getOrderDetailsFailed())
        })        
    }
}