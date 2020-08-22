import React from 'react';
import classes from './CheckoutSummary.module.scss';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';

const checkoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <div className={classes.BurgerBox}>
                <h1>We hope it tastes well!</h1>
                <div>
                    <Burger ingredients={props.ingredients} />
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
                    <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
                </div>
            </div>
        </div>
    );
};

export default checkoutSummary;