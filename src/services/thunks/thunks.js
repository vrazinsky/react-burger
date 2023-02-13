import {getIngredients, getIngredientsFailed, getIngredientsSuccess, getOrderDetails, getOrderDetailsFailed, getOrderDetailsSuccess } from '../actions/actions'
const NORMA_API = 'https://norma.nomoreparties.space/api'

export function getIngredientsThunk() {
    return function (dispatch) {
        dispatch(getIngredients())
        fetch(`${NORMA_API}/ingredients`)
        .then(res  => {    
            checkResponse(res).then(res => {
            if (res && res.success) {
                dispatch(getIngredientsSuccess(res.data))
            }else {
                dispatch(getIngredientsFailed())
            }
        })
    }).catch( err => {       
        dispatch(getIngredientsFailed())
    })
}}

export function getOrderDetailsThunk(ids) {
    return function (dispatch) {
        dispatch(getOrderDetails())
        const body = {'ingredients': ids}
        fetch(`${NORMA_API}/orders`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          })
        .then(res  => {    
            checkResponse(res).then(res => {
            if (res && res.success) {
                dispatch(getOrderDetailsSuccess(res.order))
            }else {
                dispatch(getOrderDetailsFailed())
            }
        })
    }).catch( err => {       
        dispatch(getOrderDetailsFailed())
    })
}}

const checkResponse = res => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
  };