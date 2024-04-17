import { Link, Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path: '/vite-project/',
    element: <div><Link to={'home'}>home</Link><Outlet/></div>,
    children: [
      {
        path: '/home/',
        element: <div>home</div>
      },
      {
        path: '/about/',
        element: <div>about</div>
      }
    ]
  }
])
const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App