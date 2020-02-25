import { FormControl, Select } from '@material-ui/core';
import { mount, shallow, } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import { DropDownInput, } from './DropDownInput';

jest.mock('../../Utils');

describe('<DropDownInput />', () => {
    it('renders correctly', () => {
        expect(renderer.create(
            <DropDownInput
                label='dummy'
                entries={[
                    {
                        label : '1',
                        value : 'a',
                    },
                    {
                        label : '2',
                        value : 'b',
                    }
                ]}
                value='a'
                onChange={() => {}} />
        ).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(
            <DropDownInput
                label='dummy'
                entries={[
                    {
                        label : '1',
                        value : 'a',
                    },
                    {
                        label : '2',
                        value : 'b',
                    }
                ]}
                value='a'
                onChange={() => {}} />
        );
    });

    it('triggers onChange when changed', () => {
        const onChange = jest.fn();

        shallow(
            <DropDownInput
                label='dummy'
                entries={[
                    {
                        label : '1',
                        value : 'a',
                    },
                    {
                        label : '2',
                        value : 'b',
                    }
                ]}
                value='a'
                onChange={onChange} />)
            .find(FormControl)
            .find(Select)
            .simulate('change', {
                target : {
                    value : 'b',
                },
            });

        expect(onChange.mock.calls.length).toEqual(1);
    });

    it('triggers onChange when changed', () => {
        let value = 'a';

        const onChange = newValue => value = newValue;

        shallow(
            <DropDownInput
                label='dummy'
                entries={[
                    {
                        label : '1',
                        value : 'a',
                    },
                    {
                        label : '2',
                        value : 'b',
                    }
                ]}
                value='a'
                onChange={onChange} />)
            .find(FormControl)
            .find(Select)
            .simulate('change', {
                target : {
                    value : 'b',
                },
            });

        expect(value).toEqual('b');
    });

    it('does not trigger onChange when changed', () => {
        let value = 'a';

        shallow(
            <DropDownInput
                label='dummy'
                entries={[
                    {
                        label : '1',
                        value : 'a',
                    },
                    {
                        label : '2',
                        value : 'b',
                    }
                ]}
                value='a' />)
            .find(FormControl)
            .find(Select)
            .simulate('change', {
                target : {
                    value : 'b',
                },
            });

        expect(value).toEqual('a');
    });
});
