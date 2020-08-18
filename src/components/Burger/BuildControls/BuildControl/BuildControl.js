import React from 'react';
import classes from './BuildControl.module.scss';

const buildControl = (props) => {
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.label}</div>
            <button onClick={props.removed} className={classes.Less} disabled={props.disabled}>Less</button>
            <button onClick={props.added} className={classes.More} disabled={props.noMore}>More</button>
        </div>
    );
};

export default buildControl;