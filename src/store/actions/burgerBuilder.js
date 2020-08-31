import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredient = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const initIngredients = () => {
    return dispatch => {
          axios.get('/ingredients.json')
            .then(response => {
                //needed to print in correct order=========
                let renderIngredients = {
                    tomatoes: 0,
                    lettuce: 0,
                    pickle: 0,
                    cheese: 0,
                    bacon: 0,
                    burger: 0
                };
                let keys = Object.keys(renderIngredients);
                keys.forEach(key => {
                    renderIngredients[key] = response.data[key];
                });
                //===========================================
                dispatch(setIngredients(renderIngredients));
            })
            .catch(error => {
                dispatch(fetchIngredientsFailed());
            });   
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}

export const fetchIngredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    }
}