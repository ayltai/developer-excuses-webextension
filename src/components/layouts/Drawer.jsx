import { makeStyles, SwipeableDrawer, } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

export const Drawer = props => {
    const classes = makeStyles(theme => ({
        drawer : {
            padding : theme.spacing(1),
            width   : theme.spacing(48),
        },
    }))();

    return (
        <SwipeableDrawer
            className={classes.drawer}
            open={props.open}
            onOpen={() => {
                if (props.onOpen) props.onOpen();
            }}
            onClose={() => {
                if (props.onClose) props.onClose();
            }}>
            {props.children}
        </SwipeableDrawer>
    );
};

Drawer.propTypes = {
    children : PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
    open     : PropTypes.bool,
    onOpen   : PropTypes.func,
    onClose  : PropTypes.func,
};
