import { shape, string, number, arrayOf } from 'prop-types';

export default shape({
  id: number,
  title: string,
  members: arrayOf(number),
  description: string
})