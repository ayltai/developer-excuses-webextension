import { Box, Button, createMuiTheme, IconButton, makeStyles, ThemeProvider, Tooltip, useMediaQuery, } from '@material-ui/core';
import { Save, Settings, } from '@material-ui/icons';
import React from 'react';

import { Accordion, } from './components/layouts/Accordion';
import { Drawer, } from './components/layouts/Drawer';
import { DropDownInput, } from './components/inputs/DropDownInput';
import { KenBurnsImage, } from './components/KenBurnsImage';
import { Message, } from './components/Message';
import { NumberInput, } from './components/inputs/NumberInput';
import { ShadowedText, } from './components/ShadowedText';
import { TextInput, } from './components/inputs/TextInput';
import { ToggleInput, } from './components/inputs/ToggleInput';
import { ANIMATION_FPS, ANIMATION_ZOOM, CONFIGURATION, FONT_WEIGHTS, } from './Config';
import { EXCUSES, } from './Data';
import { getRandomPhoto, pickAny, } from './Utils';

import './App.css';

export const App = () => {
    const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const appTheme = React.useMemo(() => createMuiTheme({
        palette : {
            primary : {
                main : '#f2f2f2',
            },
            type    : isDarkMode ? 'dark' : 'light',
        },
    }), [ isDarkMode, ]);

    const classes = makeStyles(theme => ({
        center      : {
            position       : 'absolute',
            width          : `calc(100vw - ${theme.spacing(4)}px)`,
            height         : `calc(100vh - ${theme.spacing(4)}px)`,
            margin         : 0,
            padding        : theme.spacing(2),
            display        : 'flex',
            justifyContent : 'center',
            alignItems     : 'center',
            resize         : 'both',
        },
        bottomLeft  : {
            position : 'absolute',
            left     : 0,
            bottom   : 0,
            padding  : theme.spacing(1),
        },
        bottomRight : {
            position  : 'absolute',
            right     : 0,
            bottom    : 0,
            padding   : theme.spacing(1),
            textAlign : 'right',
        },
        settings    : {
            position : 'fixed',
            left     : theme.spacing(1),
            top      : theme.spacing(1),
        },
        button      : {
            paddingLeft   : theme.spacing(2),
            paddingRight  : theme.spacing(2),
            paddingTop    : theme.spacing(1),
            paddingBottom : theme.spacing(2),
            textAlign     : 'center',
        },
    }))();

    const [ fontFamily,        setFontFamily,        ] = React.useState(CONFIGURATION.fontFamily);
    const [ fontSize,          setFontSize,          ] = React.useState(CONFIGURATION.fontSize);
    const [ fontWeight,        setFontWeight,        ] = React.useState(CONFIGURATION.fontWeight);
    const [ fontShadow,        setFontShadow,        ] = React.useState(CONFIGURATION.fontShadow);
    const [ animationEnabled,  setAnimationEnabled,  ] = React.useState(true);
    const [ animationDuration, setAnimationDuration, ] = React.useState(CONFIGURATION.animationDuration);
    const [ imageUrl,          setImageUrl,          ] = React.useState();
    const [ imageBlur,         setImageBlur,         ] = React.useState(CONFIGURATION.imageBlur);
    const [ imageDarken,       setImageDarken,       ] = React.useState(CONFIGURATION.imageDarken);
    const [ imageTopics,       setImageTopics,       ] = React.useState(CONFIGURATION.imageTopics);
    const [ excuse,            setExcuse,            ] = React.useState();
    const [ username,          setUsername,          ] = React.useState();
    const [ usernameTemp,      setUsernameTemp,      ] = React.useState();
    const [ creditUrl,         setCreditUrl,         ] = React.useState();
    const [ creditUrlTemp,     setCreditUrlTemp,     ] = React.useState();
    const [ isDrawerOpened,    setDrawerOpened,      ] = React.useState(false);
    const [ isMessageShown,    setMessageShown,      ] = React.useState(false);

    const getImage = () => getRandomPhoto(pickAny(imageTopics), (url, user, credit) => {
        setImageUrl(url);
        setUsernameTemp(user);
        setCreditUrlTemp(`${credit}?utm_source=Developers%20Excuses&utm_medium=referral`);
    });

    React.useEffect(() => {
        getImage();

        window.chrome.storage.sync.get({
            ...CONFIGURATION,
        }, configuration => {
            setFontFamily(configuration.fontFamily);
            setFontSize(configuration.fontSize);
            setFontWeight(configuration.fontWeight);
            setFontShadow(configuration.fontShadow);
            setAnimationDuration(configuration.animationDuration);
            setImageBlur(configuration.imageBlur);
            setImageDarken(configuration.imageDarken);
            setImageTopics(configuration.imageTopics);
        });
    }, []);

    return (
        <ThemeProvider theme={appTheme}>
            <KenBurnsImage
                className='background'
                imageUrl={imageUrl}
                width={window.innerWidth}
                height={window.innerHeight}
                animationZoom={animationEnabled ? ANIMATION_ZOOM : 1}
                animationDuration={animationDuration}
                animationFPS={ANIMATION_FPS}
                imageBlur={imageBlur}
                imageDarken={imageDarken}
                onStart={() => {
                    setUsername(usernameTemp);
                    setCreditUrl(creditUrlTemp);
                    setExcuse(pickAny(EXCUSES));
                }}
                onComplete={() => getImage()} />
            <ShadowedText
                className={classes.center}
                fontFamily={fontFamily}
                fontWeight={fontWeight}
                fontSize={fontSize}
                fontShadow={fontShadow}
                text={excuse} />
            <ShadowedText
                className={classes.bottomLeft}
                fontFamily={fontFamily}
                fontSize={Math.floor(fontSize * 0.3)}
                fontShadow={Math.floor(fontShadow * 0.3)}
                text={username ? `Unsplash 〉${username}` : ''} />
            <ShadowedText
                className={classes.bottomRight}
                fontFamily={fontFamily}
                fontSize={Math.floor(fontSize * 0.3)}
                fontShadow={Math.floor(fontShadow * 0.3)}
                text={creditUrl}
                onClick={() => window.chrome.tabs.update({
                    url : creditUrl,
                })}/>
            <Box className={classes.settings}>
                <Tooltip title='Settings'>
                    <IconButton onClick={() => setDrawerOpened(true)}>
                        <Settings />
                    </IconButton>
                </Tooltip>
            </Box>
            <Drawer
                open={isDrawerOpened}
                onOpen={() => setDrawerOpened(true)}
                onClose={() => setDrawerOpened(false)}>
                <Accordion label='Animation settings'>
                    <ToggleInput
                        label='Enable animation'
                        checked={animationEnabled}
                        onChange={checked => setAnimationEnabled(checked)} />
                    <NumberInput
                        label='Refresh time interval'
                        min={15}
                        max={120}
                        step={15}
                        value={animationDuration / 1000}
                        onChange={value => setAnimationDuration(value * 1000)} />
                </Accordion>
                <Accordion label='Image settings'>
                    <TextInput
                        label='Topics'
                        placeholder='One per line'
                        value={imageTopics.join('\n')}
                        multiline
                        onChange={value => setImageTopics(value.split('\n'))} />
                    <NumberInput
                        label='Blur'
                        min={0}
                        max={20}
                        value={imageBlur}
                        onChange={value => setImageBlur(value)} />
                    <NumberInput
                        label='Darken'
                        min={0}
                        max={20}
                        value={imageDarken}
                        onChange={value => setImageDarken(value)} />
                </Accordion>
                <Accordion label='Font settings'>
                    <TextInput
                        label='Family'
                        value={fontFamily}
                        onChange={value => setFontFamily(value)} />
                    <NumberInput
                        label='Size'
                        min={2}
                        max={120}
                        step={2}
                        value={fontSize}
                        onChange={value => setFontSize(value)} />
                    <DropDownInput
                        label='Weight'
                        entries={FONT_WEIGHTS}
                        value={fontWeight}
                        onChange={value => setFontWeight(value)} />
                    <NumberInput
                        label='Shadow'
                        min={0}
                        max={20}
                        step={2}
                        value={fontShadow}
                        onChange={value => setFontShadow(value)} />
                </Accordion>
                <Box className={classes.button}>
                    <Button
                        startIcon={<Save />}
                        variant='contained'
                        onClick={() => {
                            window.chrome.storage.sync.set({
                                fontFamily,
                                fontSize,
                                fontWeight,
                                fontShadow,
                                animationDuration,
                                imageBlur,
                                imageDarken,
                                imageTopics,
                            });

                            setMessageShown(true);
                        }}>
                        Save
                    </Button>
                </Box>
            </Drawer>
            <Message
                open={isMessageShown}
                text='Settings saved successfully'
                onClose={() => setMessageShown(false)} />
        </ThemeProvider>
    );
};
