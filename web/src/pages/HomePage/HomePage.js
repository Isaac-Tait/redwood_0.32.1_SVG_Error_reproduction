import { Link, routes } from '@redwoodjs/router'

import Logo from './mtntpcdng_lg.svg'

const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Logo />
      <p>
        Find me in <code>./web/src/pages/HomePage/HomePage.js</code>
      </p>
      <p>
        My default route is named <code>home</code>, link to me with `
        <Link to={routes.home()}>Home</Link>`
      </p>
    </>
  )
}

export default HomePage
