import { Box, makeStyles, TextField, } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

export const TextInput = props => {
    const classes = makeStyles(theme => ({
        margin : {
            marginBottom : theme.spacing(2),
        },
    }))();

    const [ value, setValue, ] = React.useState(props.value);

    return (
        <Box className={classes.margin}>
            <TextField
                label={props.label}
                placeholder={props.placeholder}
                variant='filled'
                multiline={props.multiline}
                rows={props.multiline ? 5 : 1}
                rowsMax={props.multiline ? 5 : 1}
                value={value}
                fullWidth
                onChange={event => {
                    setValue(event.target.value);

                    if (props.onChange) props.onChange(event.target.value);
                }} />
        </Box>
    );
};

TextInput.propTypes = {
    label       : PropTypes.string,
    placeholder : PropTypes.string,
    multiline   : PropTypes.bool,
    value       : PropTypes.string,
    onChange    : PropTypes.func,
};
