import colours from './colours.js'
import normalize from './vendor/normalize';

export default `

${normalize}

* {
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-family: Helvetica, Arial, sans-serif;
  background: ${colours.secondary};
}
`