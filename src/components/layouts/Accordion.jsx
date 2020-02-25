import { makeStyles, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography, } from '@material-ui/core';
import { ExpandMore, } from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

export const Accordion = props => {
    const classes = makeStyles(() => ({
        block : {
            display : 'block',
        },
    }))();
    return (
        <ExpansionPanel square>
            <ExpansionPanelSummary expandIcon={<ExpandMore />}>
                <Typography variant='h6'>{props.label}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails className={classes.block}>
                {props.children}
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};

Accordion.propTypes = {
    children : PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
    label    : PropTypes.string,
};
