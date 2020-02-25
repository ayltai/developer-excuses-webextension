import { makeStyles, Typography, } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const RawShadowedText = props => {
    const classes = makeStyles(() => ({
        text : {
            fontFamily : props.fontFamily,
            fontWeight : props.fontWeight || 400,
            fontSize   : props.fontSize || 12,
            textShadow : `0 0 ${props.fontShadow * 2 + (props.fontShadow > 0 ? 1 : 0)}px rgba(0, 0, 0, 0.85)`,
            cursor     : props.onClick ? 'pointer' : 'default',
        },
    }))();

    return (
        <Typography
            className={props.className}
            color='textPrimary'>
            <div
                className={classes.text}
                onClick={() => {
                    if (props.onClick) props.onClick();
                }}>
                {props.text}
            </div>
        </Typography>
    );
};

export const ShadowedText = React.memo(RawShadowedText);

ShadowedText.propTypes = {
    className  : PropTypes.string,
    text       : PropTypes.string,
    fontFamily : PropTypes.string,
    fontWeight : PropTypes.number,
    fontSize   : PropTypes.number,
    fontShadow : PropTypes.number,
    onClick    : PropTypes.func,
};

RawShadowedText.propTypes = ShadowedText.propTypes;
