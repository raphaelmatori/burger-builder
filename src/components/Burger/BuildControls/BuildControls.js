import React from 'react';
import classes from './BuildControls.module.scss';
import BuildControl from './BuildControl/BuildControl';
const controls = [
    { label: 'Tomatoes', type: 'tomatoes' },
    { label: 'Lettuce', type: 'lettuce' },
    { label: 'Pickle', type: 'pickle' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Burger', type: 'burger' },
];

const buildControls = (props) => {
    return (
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => {
                return <BuildControl key={ctrl.label} label={ctrl.label}
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                    noMore={props.noMore[ctrl.type]}
                />
            })}
            <button
                className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}
            >ORDER NOW</button>
        </div>
    );
};

export default buildControls;