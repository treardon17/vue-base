import Pages from './pages'

export const Links = {
  // internal links
  login: {
    name: 'login',
    path: '/login',
    component: Pages.Login
  },
  // external links
  google: {
    name: 'google',
    path: 'https://www.google.com'
  }
}

// Routes for the main router
const Main = [
  {
    navName: 'Login',
    ...Links.login
  }
]

export default Main
