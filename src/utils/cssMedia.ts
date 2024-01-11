export const Colors = {
    coreBlue: '#448EE2',
    coreDarkerBlue: '#346EB0',
    white: '#fff',
    black: '#000',
    gray: '#333333'
};

export const Breakpoints = {
    nano: '400px',
    small: '500px',
    medium: '768px',
    large: '1200px',
    xxLarge: '1920px',
    fourK: '3840px'
};

export const SCREEN_SIZES = {
    desktop: 1200,
    tablet: 768,
    mobile: 400
};

export const minWidthQuery = (breakpoint: string) => `@media screen and (min-width: ${breakpoint})`;
