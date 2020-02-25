import { Box, FormControl, InputLabel, makeStyles, MenuItem, Select, } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import { uuid, } from '../../Utils';

export const DropDownInput = props => {
    const classes = makeStyles(theme => ({
        margin    : {
            marginBottom : theme.spacing(2),
        },
        fullWidth : {
            width : '100%',
        },
    }))();

    const [ value, setValue, ] = React.useState(props.value);

    const id = React.useMemo(() => uuid(), []);

    return (
        <Box className={classes.margin}>
            <FormControl
                className={classes.fullWidth}
                variant='filled'>
                <InputLabel id={id}>
                    {props.label}
                </InputLabel>
                <Select
                    labelId={id}
                    value={value}
                    onChange={event => {
                        setValue(event.target.value);

                        if (props.onChange) props.onChange(event.target.value);
                    }}>
                    {props.entries.map(entry => (
                        <MenuItem
                            key={entry.value}
                            value={entry.value}>
                            {entry.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
};

DropDownInput.propTypes = {
    label    : PropTypes.string,
    entries  : PropTypes.arrayOf(PropTypes.object).isRequired,
    value    : PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    onChange : PropTypes.func,
};
