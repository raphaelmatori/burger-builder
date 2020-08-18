import React from 'react';
import classes from './Spinner.module.scss';

const spinner = (props) => {
    return (
        <div className={classes.Spinner}>
            Loading ...
        </div>
    );
};

export default spinner;