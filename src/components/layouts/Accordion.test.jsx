import { mount, } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import { Accordion, } from './Accordion';

describe('<Accordion />', () => {
    it('renders correctly', () => {
        expect(renderer.create(<Accordion label='dummy' />).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(
            <Accordion label='dummy'>
                <div />
            </Accordion>
        );
    });
});
