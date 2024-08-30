import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './index.css'

import HomePage from './components/HomePage/HomePage.jsx'
import Reader from './components/Reader/Reader.jsx'
import CreateStory from './components/CreateStory/CreateStory.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <div>Not found</div>
  },
  {
    path: '/story',
    element: <Reader/>
  },{
    path: '/create',
    element: <CreateStory/>
  },
  {
    path: '/story/:id',
    element: <Reader />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
