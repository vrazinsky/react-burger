import { ingredientsReducer, constructorItemsReducer, currentIngredientReducer, ingredientCountersReducer, orderDetailsReducer } from './reducers'
import {
    ADD_BUN_TO_CONSTRUCTOR,
    REMOVE_BUN_FROM_CONSTRUCTOR,
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
    CLEAR_INGREDIENT_COUNTER
} from '../../utils/action-types'

describe('ingredients reducer', () => {
    it('should return the initial state', () => {
        expect(ingredientsReducer(undefined, undefined)).toEqual(
            {
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: false
            }
        )
    })

    it('should handle GET_INGREDIENTS_SUCCESS', () => {
        expect(
            ingredientsReducer({
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: false
            }, {
                type: GET_INGREDIENTS_SUCCESS,
                payload: [{
                    _id: 'string',
                    name: 'string',
                    type: 'string',
                    proteins: 123,
                    fat: 123,
                    carbohydrates: 123,
                    calories: 123,
                    price: 123,
                    image: 'string',
                    image_mobile: 'string',
                    image_large: 'string',
                    __v: 123
                }]
            })
        ).toEqual(
            {
                ingredients: [{
                    _id: 'string',
                    name: 'string',
                    type: 'string',
                    proteins: 123,
                    fat: 123,
                    carbohydrates: 123,
                    calories: 123,
                    price: 123,
                    image: 'string',
                    image_mobile: 'string',
                    image_large: 'string',
                    __v: 123
                }],
                ingredientsRequest: false,
                ingredientsFailed: false
            }
        )
    })

    it('should handle GET_INGREDIENTS', () => {
        expect(
            ingredientsReducer({
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: false
            }, {
                type: GET_INGREDIENTS,
            })
        ).toEqual(
            {
                ingredients: [],
                ingredientsRequest: true,
                ingredientsFailed: false
            }
        )
    })

    it('should handle GET_INGREDIENTS_FAILED', () => {
        expect(
            ingredientsReducer({
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: false
            }, {
                type: GET_INGREDIENTS_FAILED,
            })
        ).toEqual(
            {
                ingredients: [],
                ingredientsRequest: false,
                ingredientsFailed: true
            }
        )
    })
})

describe('constructor items reducer', () => {
    it('should return the initial state', () => {
        expect(constructorItemsReducer(undefined, undefined)).toEqual(
            {
                constructorIngredients: { bun: null, innerIngredients: [] }
            }
        )
    })

    it('should handle ADD_INNER_INGREDIENT_TO_CONSTRUCTOR', () => {
        expect(
            constructorItemsReducer({
                constructorIngredients: { bun: null, innerIngredients: [] }
            }, {
                type: ADD_INNER_INGREDIENT_TO_CONSTRUCTOR,
                payload: {
                    _id: 'string',
                    name: 'string',
                    type: 'string',
                    proteins: 123,
                    fat: 123,
                    carbohydrates: 123,
                    calories: 123,
                    price: 123,
                    image: 'string',
                    image_mobile: 'string',
                    image_large: 'string',
                    __v: 123
                }
            })
        ).toEqual(
            {
                constructorIngredients: {
                    bun: null, innerIngredients: [{
                        _id: 'string',
                        name: 'string',
                        type: 'string',
                        proteins: 123,
                        fat: 123,
                        carbohydrates: 123,
                        calories: 123,
                        price: 123,
                        image: 'string',
                        image_mobile: 'string',
                        image_large: 'string',
                        __v: 123
                    }]
                }
            }
        )
    })

    it('should handle ADD_BUN_TO_CONSTRUCTOR', () => {
        expect(
            constructorItemsReducer({
                constructorIngredients: { bun: null, innerIngredients: [] }
            }, {
                type: ADD_BUN_TO_CONSTRUCTOR,
                payload: {
                    _id: 'string',
                    name: 'string',
                    type: 'string',
                    proteins: 123,
                    fat: 123,
                    carbohydrates: 123,
                    calories: 123,
                    price: 123,
                    image: 'string',
                    image_mobile: 'string',
                    image_large: 'string',
                    __v: 123
                }
            })
        ).toEqual(
            {
                constructorIngredients: {
                    bun: {
                        _id: 'string',
                        name: 'string',
                        type: 'string',
                        proteins: 123,
                        fat: 123,
                        carbohydrates: 123,
                        calories: 123,
                        price: 123,
                        image: 'string',
                        image_mobile: 'string',
                        image_large: 'string',
                        __v: 123
                    }, innerIngredients: []
                }
            }
        )
    })

    it('should handle CHANGE_INNER_INGREDIENTS', () => {
        expect(
            constructorItemsReducer({
                constructorIngredients: { bun: null, innerIngredients: [] }
            }, {
                type: CHANGE_INNER_INGREDIENTS,
                payload: [{
                    _id: 'string',
                    name: 'string',
                    type: 'string',
                    proteins: 123,
                    fat: 123,
                    carbohydrates: 123,
                    calories: 123,
                    price: 123,
                    image: 'string',
                    image_mobile: 'string',
                    image_large: 'string',
                    __v: 123
                }]
            })
        ).toEqual(
            {
                constructorIngredients: {
                    bun: null, innerIngredients: [{
                        _id: 'string',
                        name: 'string',
                        type: 'string',
                        proteins: 123,
                        fat: 123,
                        carbohydrates: 123,
                        calories: 123,
                        price: 123,
                        image: 'string',
                        image_mobile: 'string',
                        image_large: 'string',
                        __v: 123
                    }]
                }
            }
        )
    })

    it('should handle REMOVE_BUN_FROM_CONSTRUCTOR', () => {
        expect(
            constructorItemsReducer({
                constructorIngredients: {
                    bun: {
                        _id: 'string',
                        name: 'string',
                        type: 'string',
                        proteins: 123,
                        fat: 123,
                        carbohydrates: 123,
                        calories: 123,
                        price: 123,
                        image: 'string',
                        image_mobile: 'string',
                        image_large: 'string',
                        __v: 123
                    }, innerIngredients: []
                }
            }, {
                type: REMOVE_BUN_FROM_CONSTRUCTOR
            })
        ).toEqual(
            {
                constructorIngredients: {
                    bun: null, innerIngredients: []
                }
            }
        )
    })
})

describe('current ingredient reducer', () => {
    it('should return the initial state', () => {
        expect(currentIngredientReducer(undefined, undefined)).toEqual(
            {
                currentIngredient: null
            }
        )
    })

    it('should handle ADD_CURRENT_INGREDIENT', () => {
        expect(
            currentIngredientReducer({
                currentIngredient: null
            }, {
                type: ADD_CURRENT_INGREDIENT,
                payload: {
                    _id: 'string',
                    name: 'string',
                    type: 'string',
                    proteins: 123,
                    fat: 123,
                    carbohydrates: 123,
                    calories: 123,
                    price: 123,
                    image: 'string',
                    image_mobile: 'string',
                    image_large: 'string',
                    __v: 123
                }
            })
        ).toEqual(
            {
                currentIngredient: {
                    _id: 'string',
                    name: 'string',
                    type: 'string',
                    proteins: 123,
                    fat: 123,
                    carbohydrates: 123,
                    calories: 123,
                    price: 123,
                    image: 'string',
                    image_mobile: 'string',
                    image_large: 'string',
                    __v: 123
                }
            }
        )
    })

    it('should handle REMOVE_CURRENT_INGREDIENT', () => {
        expect(
            currentIngredientReducer({
                currentIngredient: {
                    _id: 'string',
                    name: 'string',
                    type: 'string',
                    proteins: 123,
                    fat: 123,
                    carbohydrates: 123,
                    calories: 123,
                    price: 123,
                    image: 'string',
                    image_mobile: 'string',
                    image_large: 'string',
                    __v: 123
                }
            }, {
                type: REMOVE_CURRENT_INGREDIENT
            })
        ).toEqual(
            {
                currentIngredient: null
            }
        )
    })
})

describe('order details reducer', () => {
    it('should return the initial state', () => {
        expect(orderDetailsReducer(undefined, undefined)).toEqual(
            {
                orderDetails: null,
                orderDetailsRequest: false,
                orderDetailsFailed: false
            }
        )
    })

    it('should handle GET_ORDER_DETAILS_SUCCESS', () => {
        expect(
            orderDetailsReducer({
                orderDetails: null,
                orderDetailsRequest: false,
                orderDetailsFailed: false
            }, {
                type: GET_ORDER_DETAILS_SUCCESS,
                payload: {
                    number: 123
                }
            })
        ).toEqual(
            {
                orderDetails: { number: 123 },
                orderDetailsRequest: false,
                orderDetailsFailed: false
            }
        )
    })

    it('should handle GET_ORDER_DETAILS', () => {
        expect(
            orderDetailsReducer({
                orderDetails: null,
                orderDetailsRequest: false,
                orderDetailsFailed: false
            }, {
                type: GET_ORDER_DETAILS
            })
        ).toEqual(
            {
                orderDetails: null,
                orderDetailsRequest: true,
                orderDetailsFailed: false
            }
        )
    })

    it('should handle GET_ORDER_DETAILS_FAILED', () => {
        expect(
            orderDetailsReducer({
                orderDetails: null,
                orderDetailsRequest: false,
                orderDetailsFailed: false
            }, {
                type: GET_ORDER_DETAILS_FAILED
            })
        ).toEqual(
            {
                orderDetails: null,
                orderDetailsRequest: false,
                orderDetailsFailed: true
            }
        )
    })

    it('should handle REMOVE_ORDER_DETAILS', () => {
        expect(
            orderDetailsReducer({
                orderDetails: { number: 123 },
                orderDetailsRequest: false,
                orderDetailsFailed: false
            }, {
                type: REMOVE_ORDER_DETAILS
            })
        ).toEqual(
            {
                orderDetails: null,
                orderDetailsRequest: false,
                orderDetailsFailed: false
            }
        )
    })
})

describe('ingredients counter reducer', () => {
    it('should return the initial state', () => {
        expect(ingredientCountersReducer(undefined, undefined)).toEqual(
            {
            }
        )
    })

    it('should handle INCREASE_INGREDIENT_COUNTER', () => {
        expect(
            ingredientCountersReducer({
            }, {
                type: INCREASE_INGREDIENT_COUNTER,
                payload: "string"
            })
        ).toEqual(
            {
                "string": 1
            }
        )
    })

    it('should handle INCREASE_INGREDIENT_COUNTER when exists', () => {
        expect(
            ingredientCountersReducer({
                "string": 1
            }, {
                type: INCREASE_INGREDIENT_COUNTER,
                payload: "string"
            })
        ).toEqual(
            {
                "string": 2
            }
        )
    })

    it('should handle DECREASE_INGREDIENT_COUNTER', () => {
        expect(
            ingredientCountersReducer({
                "string": 2
            }, {
                type: DECREASE_INGREDIENT_COUNTER,
                payload: "string"
            })
        ).toEqual(
            {
                "string": 1
            }
        )
    })

    it('should handle CLEAR_INGREDIENT_COUNTER', () => {
        expect(
            ingredientCountersReducer({
                "string1": 2,
                "string2": 3
            }, {
                type: CLEAR_INGREDIENT_COUNTER
            })
        ).toEqual(
            {
            }
        )
    })
})


