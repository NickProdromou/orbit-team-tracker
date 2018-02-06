import { shape, string, number, arrayOf } from 'prop-types';

export default shape({
  id: number,
  title: string,
  description: string,
  assignedMembers: arrayOf(number),
  teams: arrayOf(number),
  storyPoints: number,
  linkToIssue: string
});
