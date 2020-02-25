import { Snackbar, } from '@material-ui/core';
import { Alert, } from '@material-ui/lab';
import PropTypes from 'prop-types';
import React from 'react';

import { MESSAGE_DURATION, } from '../Config';

export const Message = props => {
    const handleClose = () => {
        if (props.onClose) props.onClose();
    };

    return (
        <Snackbar
            open={props.open}
            autoHideDuration={MESSAGE_DURATION}
            onClose={handleClose}>
            <Alert
                severity='success'
                onClose={handleClose}>
                {props.text}
            </Alert>
        </Snackbar>
    );
};

Message.propTypes = {
    open    : PropTypes.bool,
    text    : PropTypes.string.isRequired,
    onClose : PropTypes.func,
};
