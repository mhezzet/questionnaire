import { useRoutes } from 'react-router-dom'
import { Home } from '../pages/home'
import { NotFound } from '../pages/not-found'
import { Questionnaire } from '../pages/questionnaire'

export const Routes = () => {
  const element = useRoutes(routes)
  return element
}

const routes = [
  {
    element: <Home />,
    path: '/',
  },
  {
    element: <Questionnaire />,
    path: 'questionnaire',
  },
  { path: '*', element: <NotFound /> },
]
