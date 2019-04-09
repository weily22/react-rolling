import App from './../components/App'
import Demo from './../components/Demo'
import NotFound from './../components/NotFound'

const rootRoute = [{
  path: '/',
  component: App,
  childRoutes: [
    {
      path: 'demo',
      component: Demo
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
}];

export default rootRoute;
