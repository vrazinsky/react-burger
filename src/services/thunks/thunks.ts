import { getIngredients, getIngredientsFailed, getIngredientsSuccess, getOrderDetails, getOrderDetailsFailed, getOrderDetailsSuccess } from '../actions/actions'
import { getIngredientsRequest, getOrderDetailsRequest } from '../../utils/burger-api'
import { Dispatch } from 'redux'

export function getIngredientsThunk() {
    return function (dispatch: Dispatch) {
        dispatch(getIngredients())
        getIngredientsRequest()
            .then(res => {
                if (res) {
                    dispatch(getIngredientsSuccess(res.data))
                } else {
                    dispatch(getIngredientsFailed())
                }
            })
            .catch(err => {
                alert('err')
                dispatch(getIngredientsFailed())
            })
    }
}

export function getOrderDetailsThunk(ids: Array<string>) {
    return function (dispatch: Dispatch) {
        dispatch(getOrderDetails())
        getOrderDetailsRequest(ids)
            .then(res => {
                if (res) {
                    dispatch(getOrderDetailsSuccess(res.order))
                } else {
                    dispatch(getOrderDetailsFailed())
                }
            })
            .catch(err => {
                dispatch(getOrderDetailsFailed())
            })
    }
}