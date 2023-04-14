import { getIngredients, getIngredientsFailed, getIngredientsSuccess, getOrderDetails, getOrderDetailsFailed, getOrderDetailsSuccess } from '../actions/actions'
import { getIngredientsRequest, getOrderDetailsRequest } from '../../utils/burger-api'
import { AppDispatch, AppThunk } from '../../store/store'

export const getIngredientsThunk: AppThunk = () => {
    return function (dispatch: AppDispatch) {
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

export const getOrderDetailsThunk: AppThunk = (ids: Array<string>) => {
    return function (dispatch: AppDispatch) {
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