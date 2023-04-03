import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './Components/Header/Header';
import About from './Components/ABout/About';
import Contact from './Components/Contact/Contact';
import Frist from './Components/Frist/Frist';
import Friends from './Components/Friends/Friends';
import FriendDetail from './Components/FriendDetail/FriendDetail';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App></App>,
    children: [
      {
        path:'/',
        element: <Frist></Frist>
      },
      {
        path:'/friends',
        element: <Friends></Friends>,
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path:'/friend/:friendId',
        element: <FriendDetail></FriendDetail>
      },
      {
        path:'/about',
        element: <About></About>
      },
      {
        path:'/contact',
        element: <Contact></Contact>
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <RouterProvider router={router} />

  </React.StrictMode>,
)
