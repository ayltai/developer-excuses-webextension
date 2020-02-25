import { mount, shallow, } from 'enzyme';
import React from 'react';

import { Message, } from './Message';

describe('<Message />', () => {
    it('mounts without error', () => {
        mount(
            <Message
                open
                text='dummy'
                onClose={() => {}} />
        );
    });

    it('triggers onClose when closed', () => {
        const onClose = jest.fn();

        shallow(
            <Message
                open
                text='dummy'
                onClose={onClose} />)
            .simulate('close');

        expect(onClose.mock.calls.length).toEqual(1);
    });
});
