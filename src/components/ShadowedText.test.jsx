import { mount, shallow, } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import { ShadowedText, } from './ShadowedText';

describe('<ShadowedText />', () => {
    it('renders correctly', () => {
        expect(renderer.create(
            <ShadowedText
                text='dummy'
                fontFamily='Arial'
                fontWeight={400}
                fontSize={16}
                fontShadow={2}
                onClick={() => {}} />
        ).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(
            <ShadowedText
                text='dummy'
                fontWeight={400} />
        );
    });

    it('triggers onClick when clicked', () => {
        const onClick = jest.fn();

        shallow(
            <ShadowedText
                text='dummy'
                fontFamily='Arial'
                fontSize={16}
                fontShadow={2}
                onClick={onClick} />)
            .find('div')
            .simulate('click');

        expect(onClick.mock.calls.length).toEqual(1);
    });

    it('does not trigger onClick when clicked', () => {
        shallow(
            <ShadowedText
                text='dummy'
                fontFamily='Arial'
                fontSize={16}
                fontShadow={2} />)
            .find('div')
            .simulate('click');
    });
});
