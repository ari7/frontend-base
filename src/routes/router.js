import React from 'react'
import createBrowserRouter from 'found/lib/createBrowserRouter'
import Link from 'found/lib/Link'
import makeRouteConfig from 'found/lib/makeRouteConfig'
import Redirect from 'found/lib/Redirect'
import Route from 'found/lib/Route'
import PropTypes from 'prop-types'

function LinkItem(props) {
  return (
    <li>
      <Link {...props} activeStyle={{ fontWeight: 'bold' }} />
    </li>
  )
}

const propTypes = {
  children: PropTypes.node
}

function App({ children }) {
  return (
    <div>
      <ul>
        <LinkItem to="/">Main</LinkItem>
        <LinkItem to="/base">Base</LinkItem>
      </ul>

      {children}
    </div>
  )
}

App.propTypes = propTypes

const BrowserRouter = createBrowserRouter({
  routeConfig: makeRouteConfig(
    <Route path="/" Component={App}>
      <Route Component={() => <div>Hello, base!</div>} />
      <Route path="base" Component={() => <div>Base, Hello!</div>} />
    </Route>
  ),

  renderError: ({ error }) => {
    return (
      <div>
        {error.status === 404 ? 'Not found' : 'Error'}
      </div>
    )
  }
})

export default BrowserRouter
