import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const appRouter = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard/>
  },
  {
    path: '/login',
    element: <Signin />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  

])

const App = () => {
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  
  )
}

export default App