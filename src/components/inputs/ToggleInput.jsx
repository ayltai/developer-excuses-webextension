import { Box, FormControlLabel, makeStyles, Switch, } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

export const ToggleInput = props => {
    const classes = makeStyles(theme => ({
        margin : {
            marginBottom : theme.spacing(2),
        },
        label  : {
            marginLeft : 0,
        },
    }))();

    const [ checked, setChecked, ] = React.useState(props.checked || false);

    return (
        <Box className={classes.margin}>
            <FormControlLabel
                className={classes.label}
                control={
                    <Switch
                        color='default'
                        checked={checked}
                        onChange={() => {
                            const value = !checked;

                            setChecked(value);

                            if (props.onChange) props.onChange(value);
                        }} />
                }
                label={props.label}
                labelPlacement='start' />
        </Box>
    );
};

ToggleInput.propTypes = {
    label    : PropTypes.string,
    checked  : PropTypes.bool,
    onChange : PropTypes.func,
};
