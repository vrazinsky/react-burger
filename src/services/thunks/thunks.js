import {getIngredients, getIngredientsFailed, getIngredientsSuccess } from '../actions/actions'
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

const checkResponse = res => {
    return res.ok ? res.json() : res.json().then(err => Promise.reject(err));
  };