import { fontFamilyDefault, fontSizes, lineHeight } from '../variables.js';

export default function type => 
  `font: ${fontSizes[type]}/${lineHeight[type]} ${fontFamilyDefault};`