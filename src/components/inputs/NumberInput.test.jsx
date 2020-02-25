import { Slider } from '@material-ui/core';
import { mount, shallow, } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import { NumberInput, } from './NumberInput';

describe('<NumberInput />', () => {
    it('renders correctly', () => {
        expect(renderer.create(
            <NumberInput
                label='dummy'
                min={0}
                max={2}
                step={1}
                value={0}
                onChange={() => {}} />
        ).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(
            <NumberInput
                label='dummy'
                min={0}
                max={2}
                step={1}
                value={0}
                onChange={() => {}} />
        );
    });

    it('triggers onChange when changed', () => {
        const onChange = jest.fn();

        shallow(
            <NumberInput
                label='dummy'
                min={0}
                max={2}
                step={1}
                value={0}
                onChange={onChange} />)
            .find(Slider)
            .simulate('change', {}, 2);

        expect(onChange.mock.calls.length).toEqual(1);
    });

    it('changes value when changed', () => {
        let value = 0;

        const onChange = newValue => value = newValue;

        shallow(
            <NumberInput
                label='dummy'
                min={0}
                max={2}
                value={value}
                onChange={onChange} />)
            .find(Slider)
            .simulate('change', {}, 2);

        expect(value).toEqual(2);
    });

    it('does not change value when changed', () => {
        let value = 0;

        shallow(
            <NumberInput
                label='dummy'
                min={0}
                max={2}
                step={1}
                value={value} />)
            .find(Slider)
            .simulate('change', {}, 2);

        expect(value).toEqual(0);
    });
});
