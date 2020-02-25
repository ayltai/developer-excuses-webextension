import { Canvas2D, crop, } from 'kenburns';
import PropTypes from 'prop-types';
import React from 'react';

import { randomScale, randomTranslation, uuid, } from '../Utils';

const RawKenBurnsImage = props => {
    const id             = React.useMemo(() => uuid(), []);
    const minTranslation = props.animationZoom - 1;
    const step           = 1 / (props.animationDuration / props.animationFPS);
    const fromScale      = React.useRef(0);
    const toScale        = React.useRef(0);
    const maxScale       = React.useRef(0);
    const fromCrop       = React.useRef();
    const toCrop         = React.useRef();

    const update = () => {
        fromScale.current = randomScale(props.animationZoom, 1);
        toScale.current   = randomScale(props.animationZoom, 1);
        maxScale.current  = Math.max(fromScale.current, toScale.current);
        fromCrop.current  = crop(fromScale.current, [ randomTranslation(minTranslation, props.width, fromScale.current), randomTranslation(minTranslation, props.height, fromScale.current), ]);
        toCrop.current    = crop(toScale.current, [ randomTranslation(minTranslation, props.width, toScale.current), randomTranslation(minTranslation, props.height, toScale.current), ]);
    };

    const image = React.useMemo(() => new window.Image(), []);
    image.src    = props.imageUrl;
    image.onload = () => {
        if (!ready.current) {
            update();

            if (props.onStart) props.onStart();

            ready.current = true;
        }
    };

    const ready    = React.useRef(false);
    const progress = React.useRef(0);
    const kenBurns = React.useRef();

    React.useEffect(() => {
        const timer = window.setInterval(() => {
            if (ready.current) {
                const context          = document.getElementById(id).getContext('2d');
                const blurFilter       = props.imageBlur > 0 ? `blur(${props.imageBlur}px)` : '';
                const brightnessFilter = `brightness(${100 - 5 * props.imageDarken}%)`;

                if (props.imageBlur === 0 && props.imageDarken === 0) {
                    context.filter = 'none';
                } else if (props.imageBlur > 0 && props.imageDarken > 0) {
                    context.filter = `${blurFilter} ${brightnessFilter}`;
                } else if (props.imageBlur > 0) {
                    context.filter = blurFilter;
                } else if (props.imageDarken > 0) {
                    context.filter = brightnessFilter;
                }

                if (!kenBurns.current) kenBurns.current = new Canvas2D(context);

                if (progress.current < 1) {
                    kenBurns.current.animateStep(image, fromCrop.current, toCrop.current, progress.current);

                    console.log(context.filter);

                    progress.current += step;
                } else {
                    ready.current    = false;
                    progress.current = 0;

                    if (props.onComplete) props.onComplete();
                }
            }
        }, 1000 / props.animationFPS);

        return () => window.clearInterval(timer);
    }, [ id, props.imageBlur, props.imageDarken, props.onComplete, ]);

    return (
        <canvas
            className={props.className}
            id={id}
            width={props.width * maxScale.current}
            height={props.height * maxScale.current} />
    );
};

export const KenBurnsImage = React.memo(RawKenBurnsImage);

KenBurnsImage.propTypes = {
    className         : PropTypes.string,
    imageUrl          : PropTypes.string.isRequired,
    width             : PropTypes.number.isRequired,
    height            : PropTypes.number.isRequired,
    animationZoom     : PropTypes.number.isRequired,
    animationDuration : PropTypes.number.isRequired,
    animationFPS      : PropTypes.number.isRequired,
    imageBlur         : PropTypes.number.isRequired,
    imageDarken       : PropTypes.number.isRequired,
    onStart           : PropTypes.func,
    onComplete        : PropTypes.func,
};

RawKenBurnsImage.propTypes = KenBurnsImage.propTypes;
