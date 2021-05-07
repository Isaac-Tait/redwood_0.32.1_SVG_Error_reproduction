import { Link, routes } from '@redwoodjs/router'

import Logo from './mtntpcdng_lg.svg'

const AboutPage = () => {
  return (
    <>
      <h1>AboutPage</h1>
      <Logo />
      <p>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.js</code>
      </p>
      <p>
        My default route is named <code>about</code>, link to me with `
        <Link to={routes.about()}>About</Link>`
      </p>
    </>
  )
}

export default AboutPage
