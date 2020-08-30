import * as actionTypes from './actions';

const initialState = {
    ingredients: {
        tomatoes: 0,
        lettuce: 0,
        pickle: 0,
        cheese: 0,
        bacon: 0,
        burger: 0
    },
    totalPrice: 4
}

const INGREDIENT_PRICES = {
    tomatoes: 0.3,
    lettuce: 0.5,
    pickle: 0.4,
    cheese: 0.3,
    bacon: 0.7,
    burger: 1.3
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        default:
            return state;
    }
}

export default reducer;