import { fontFamilyDefault, fontSizes, lineHeight } from '../variables.js';

export default function(type) {
  return  `font: ${fontSizes[type]}/${lineHeight[type]} ${fontFamilyDefault};`
}  