import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { About, Contact, Home, Projects } from './pages'
import Applayout from './components/Applayout'

const App: React.FC = () => {
  const routes = createBrowserRouter([
    {
      element: <Applayout />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/projects', element: <Projects /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ])

  return (
    <main className="bg-slate-300/20">
      <RouterProvider router={routes} />
    </main>
  )
}

export default App
