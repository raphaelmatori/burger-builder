import React, { Component } from 'react';
import Aux from '../../hoc/myAux/myAux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import classes from './BurgerBuilder.module.scss';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';

const INGREDIENT_PRICES = {
    tomatoes: 0.3,
    lettuce: 0.5,
    pickle: 0.4,
    cheese: 0.3,
    bacon: 0.7,
    burger: 1.3
}

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false
    }

    componentDidMount() {
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
                this.setState({ ingredients: renderIngredients })
            });
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey]
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if (oldCount === 0) {
            return;
        }

        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }

    purchaseContinueHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice, //should be calculated on server-side
            customer: {
                name: 'Raphael Matori',
                address: {
                    street: 'Rua Teste',
                    zipCode: '12220700',
                    country: 'Brazil'
                },
                email: 'raphaelmatori@live.com'
            },
            deliveryMethod: 'Express'
        }
        axios.post('/orders.json', order)
            .then((response) => {
                this.setState({ loading: false, purchasing: false });
            })
            .catch((error) => {
                this.setState({ loading: false, purchasing: false });
            });
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };

        const noMoreInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }


        for (let key in noMoreInfo) {
            noMoreInfo[key] = noMoreInfo[key] === 3
        }

        let orderSummary = null;
        let burger = <Spinner />;
        if (this.state.ingredients) {
            burger = (
                <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        noMore={noMoreInfo}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                        purchasable={this.state.purchasable}
                    />
                </Aux>
            );

            orderSummary = <OrderSummary
                ingredients={this.state.ingredients}
                price={this.state.totalPrice}
                purchaseCanceled={this.purchaseCancelHandler}
                purchaseContinued={this.purchaseContinueHandler}
            />
        }

        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Aux>
                <div className={classes.MainDiv}>
                    <Modal show={this.state.purchasing}
                        modalClosed={this.purchaseCancelHandler}
                    >
                        {orderSummary}
                    </Modal>
                    {burger}
                </div>
            </ Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);