
export function getIconSize(breakpoint) {
    switch (breakpoint) {
        case "xs":
            return 20;
        case "sm":
            return 30;
        case "md":
            return 30;
        case "lg":
            return 30;
        case "xl":
            return 40;
        case "2xl":
            return 50;
        default:
            return 70;
    }
}

// Utility file for responsive design functions.

export const MOBILE_TABLET_MAX_WIDTH = 960;
export const MOBILE_MAX_WIDTH = 425;
export const ONE_TWO_BREAKPOINT = 780;

/**
 * Checks if the current device is a mobile or tablet based on screen width.
 * @returns {boolean} - Returns true if the screen width is less than or equal to MOBILE_TABLET_MAX_WIDTH.
 */
export const isDeviceMobileOrTablet = () => {
    return window.innerWidth <= MOBILE_TABLET_MAX_WIDTH;
};

/**
 * Checks if the current device is mobile based on screen width.
 * @returns {boolean} - Returns true if the screen width is less than or equal to MOBILE_MAX_WIDTH.
 */
export const isDeviceMobile = () => {
    return window.innerWidth <= MOBILE_MAX_WIDTH;
};

/**
 * Determines the number of items to display per page based on the window's width
 * in relation to the ONE_TWO_BREAKPOINT constant.
 * 
 * - Returns 2 if the window width exceeds ONE_TWO_BREAKPOINT.
 * - Returns 1 if the window width is less than or equal to ONE_TWO_BREAKPOINT.
 *
 * @returns {number} - Number of items per page (either 1 or 2).
 */
export const oneTwoBreakPoint = () => {
    return window.innerWidth > ONE_TWO_BREAKPOINT ? 2 : 1;
};