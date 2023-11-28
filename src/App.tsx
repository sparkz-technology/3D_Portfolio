import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Contact, Home, Projects } from './pages'

const App: React.FC = () => {
  const routes = createBrowserRouter([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/projects', element: <Projects /> },
    { path: '/contact', element: <Contact /> },
  ])

  return <RouterProvider router={routes} />
}

export default App
