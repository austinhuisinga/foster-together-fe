import React from 'react'
import SignUp from './components/signUpForm/SignUpOverlay'
import AdminDash from './components/AdminDash/AdminDashboard'
import { Route } from 'react-router-dom'
import { CssBaseline } from '@material-ui/core'
import ReactGA from 'react-ga'
import { createBrowserHistory } from 'history'
import UserProfile from './components/AdminDash/UsersProfile'

function initializeAnalytics() {
  ReactGA.initialize('UA-159166357-1')
  const analytics = createBrowserHistory()
  // google analytics page view tracking
  analytics.listen(location => {
    ReactGA.set({ page: location.pathname }) // Update the user's current page
    ReactGA.pageview(location.pathname) // Record a pageview for the given page
    ReactGA.event({
      category: 'User',
      action: 'Sent message',
    })
  })
}

function App() {
  initializeAnalytics()
  return (
    <>
      <CssBaseline />
      <Route exact path='/signup' component={SignUp} />
      <Route exact path='/dash' component={AdminDash} />
      <Route path ='/volunteer/:id' component={UserProfile} />
    </>
  )
}

export default App
