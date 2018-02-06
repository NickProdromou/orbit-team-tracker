import { shape, string, number, arrayOf } from 'prop-types';

export default shape({
  id: number,
  name: string,
  profileUrl: string,
  team: number,
  role: string,
  assignedProjects: arrayOf(number),
  status: string,
  update: string,
  blockers: arrayOf(string)
})

