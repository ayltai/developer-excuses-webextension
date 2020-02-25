import { FormControlLabel, } from '@material-ui/core';
import { mount, shallow, } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import { ToggleInput, } from './ToggleInput';

describe('<ToggleInput />', () => {
    it('renders correctly', () => {
        expect(renderer.create(
            <ToggleInput
                label='dummy'
                checked={false}
                onChange={() => {}} />
        ).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(
            <ToggleInput
                label='dummy'
                checked={false}
                onChange={() => {}} />
        );
    });

    it('triggers onChange when toggled', () => {
        const onChange = jest.fn();

        shallow(
            <ToggleInput
                label='dummy'
                checked={false}
                onChange={onChange} />)
            .find(FormControlLabel)
            .prop('control')
            .props
            .onChange();

        expect(onChange.mock.calls.length).toEqual(1);
    });

    it('triggers onChange when toggled', () => {
        let value = false;

        const onChange = newValue => {
            value = newValue;
        };

        shallow(
            <ToggleInput
                label='dummy'
                checked={value}
                onChange={onChange} />)
            .find(FormControlLabel)
            .prop('control')
            .props
            .onChange();

        expect(value).toBeTruthy();
    });

    it('does not trigger onChange when toggled', () => {
        let value = false;

        shallow(
            <ToggleInput
                label='dummy'
                checked={value} />)
            .find(FormControlLabel)
            .prop('control')
            .props
            .onChange();

        expect(value).toBeFalsy();
    });
});
