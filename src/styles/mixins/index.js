import { breakpoints } from '../variables.js';
import { fontFamilyDefault, fontSizes, lineHeight } from '../variables.js';

const mediaQuery = (breakpoint , styleString) => {

    if (typeof styleString && typeof breakpoint !== 'string' ) {
        return;
    }

    switch (breakpoint) {
        case 'small':
            return `@media (min-width: ${breakpoints.small}) {
                ${styleString}
            }`;

        case 'medium':
            return `@media (min-width: ${breakpoints.medium}) {
                ${styleString} 
            }`;

        case 'large':
            return `@media (min-width: ${breakpoints.large}) {
                ${styleString} 
            }`;

        case 'xlarge':
            return `@media (min-width: ${breakpoints.extraLarge}) {
                ${styleString} 
            }`;

        default:
            return `${styleString}`;
    }
}


const type = type => {
  return  `font: ${fontSizes[type]}/${lineHeight[type]} ${fontFamilyDefault};`
}  

export { type, mediaQuery}