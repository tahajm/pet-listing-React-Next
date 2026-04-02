const TABLET_BREAKPOINT_PX = 768;
const MOBILE_IMAGE_WIDTH_PX = 150;
// Approximation: container width minus padding and column gaps, divided by 3 columns.
const DESKTOP_IMAGE_WIDTH_CALC = 'calc((min(1100px, 100vw) - 10rem) / 3)';

export const IMAGE_SIZES = `(min-width: ${TABLET_BREAKPOINT_PX}px) ${DESKTOP_IMAGE_WIDTH_CALC}, ${MOBILE_IMAGE_WIDTH_PX}px`;
