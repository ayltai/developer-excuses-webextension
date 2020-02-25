import { Box, makeStyles, Slider, Typography, } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

export const NumberInput = props => {
    const classes = makeStyles(theme => ({
        margin : {
            marginBottom : theme.spacing(2),
        },
    }))();

    const [ value, setValue, ] = React.useState(props.value || props.min);

    return (
        <Box className={classes.margin}>
            <Typography variant='body1'>{props.label}</Typography>
            <Slider
                min={props.min}
                max={props.max}
                step={props.step || 1}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);

                    if (props.onChange) props.onChange(newValue);
                }} />
        </Box>
    );
};

NumberInput.propTypes = {
    label    : PropTypes.string,
    min      : PropTypes.number.isRequired,
    max      : PropTypes.number.isRequired,
    step     : PropTypes.number,
    value    : PropTypes.number,
    onChange : PropTypes.func,
};
