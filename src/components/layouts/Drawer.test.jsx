import { mount, shallow, } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

import { Drawer, } from './Drawer';

describe('<Drawer />', () => {
    it('renders correctly', () => {
        expect(renderer.create(
            <Drawer
                open={false}
                onOpen={() => {}}
                onClose={() => {}}>
                <div />
            </Drawer>
        ).toJSON()).toMatchSnapshot();
    });

    it('mounts without error', () => {
        mount(
            <Drawer
                open={false}
                onOpen={() => {}}
                onClose={() => {}}>
                <div />
            </Drawer>
        );
    });

    it('triggers onOpen when opened', () => {
        const onOpen = jest.fn();

        shallow(
            <Drawer
                open={false}
                onOpen={onOpen}>
                <div />
            </Drawer>
        ).simulate('open');

        expect(onOpen.mock.calls.length).toEqual(1);
    });

    it('does not trigger onOpen when closed', () => {
        const onOpen = jest.fn();

        shallow(
            <Drawer
                open={false}
                onOpen={onOpen}>
                <div />
            </Drawer>
        ).simulate('close');

        expect(onOpen.mock.calls.length).toEqual(0);
    });

    it('triggers onClose when closed', () => {
        const onClose = jest.fn();

        shallow(
            <Drawer
                open={false}
                onClose={onClose}>
                <div />
            </Drawer>
        ).simulate('close');

        expect(onClose.mock.calls.length).toEqual(1);
    });

    it('does not trigger onClose when opened', () => {
        const onClose = jest.fn();

        shallow(
            <Drawer
                open={false}
                onClose={onClose}>
                <div />
            </Drawer>
        ).simulate('open');

        expect(onClose.mock.calls.length).toEqual(0);
    });
});
