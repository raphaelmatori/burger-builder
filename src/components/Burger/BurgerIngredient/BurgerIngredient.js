import React, { Component } from 'react';
import classes from './BurgerIngredient.module.scss'
import PropTypes from 'prop-types';
import breadTop from '../../../assets/svg/bread-top.svg';
import tomatoes from '../../../assets/svg/tomatoes.svg';
import lettuce from '../../../assets/svg/lettuce.svg';
import pickle from '../../../assets/svg/pickle.svg';
import cheese from '../../../assets/svg/cheese.svg';
import bacon from '../../../assets/svg/bacon.svg';
import burger from '../../../assets/svg/burger.svg';
import breadBottom from '../../../assets/svg/bread-bottom.svg';

class BurgetIngredient extends Component {
    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-top'):
                ingredient = <div className={classes.BreadTop}><img className={classes.svg} src={breadTop} alt="bread top"></img></div>
                break;
            case ('tomatoes'):
                ingredient = <div className={classes.Tomatoes}><img className={classes.svg} src={tomatoes} alt="tomatoes"></img></div>
                break;
            case ('lettuce'):
                ingredient = <div className={classes.Lettuce}><img className={classes.svg} src={lettuce} alt="lettuce"></img></div>
                break;
            case ('pickle'):
                ingredient = <div className={classes.Pickle}><img className={classes.svg} src={pickle} alt="pickle"></img></div>
                break;
            case ('cheese'):
                ingredient = <div className={classes.Cheese}><img className={classes.svg} src={cheese} alt="cheese"></img></div>
                break;
            case ('bacon'):
                ingredient = <div className={classes.Bacon}><img className={classes.svg} src={bacon} alt="bacon"></img></div>
                break;
            case ('burger'):
                ingredient = <div className={classes.Burger}><img className={classes.svg} src={burger} alt="burger"></img></div>
                break;
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}><img className={classes.svg} src={breadBottom} alt="bread bottom"></img></div>
                break;
            default:
                ingredient = null;
        }
        return ingredient;
    }
}

BurgetIngredient.propTypes = {
    type: PropTypes.string.isRequired
}


export default BurgetIngredient;