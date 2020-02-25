import { TextField, } from '@material-ui/core';
import { mount, shallow, } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import { TextInput, } from './TextInput';

describe('<TextInput />', () => {
    it('renders correctly', () => {
        expect(renderer.create(
            <TextInput
                label='dummy'
                placeholder='dummy'
                value='dummy'
                onChange={() => {}} />
        ).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(
            <TextInput
                label='dummy'
                placeholder='dummy'
                multiline
                value='dummy'
                onChange={() => {}} />
        );
    });

    it('triggers onChange when changed', () => {
        const onChange = jest.fn();

        shallow(
            <TextInput
                label='dummy'
                placeholder='dummy'
                multiline
                value='dummy'
                onChange={onChange} />)
            .find(TextField)
            .simulate('change', {
                target : {
                    value : 'dummy',
                },
            });

        expect(onChange.mock.calls.length).toEqual(1);
    });

    it('does not trigger onChange when changed', () => {
        let value = '';

        shallow(
            <TextInput
                label='dummy'
                placeholder='dummy'
                multiline
                value={value} />)
            .find(TextField)
            .simulate('change', {
                target : {
                    value : 'dummy',
                },
            });

        expect(value).toEqual('');
    });
});
