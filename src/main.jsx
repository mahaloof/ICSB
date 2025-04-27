import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Events from './pages/Events.jsx'
import Blog from './pages/Blog.jsx'
import Team from './pages/Team.jsx'
import Gallary from './pages/Gallary.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/ICSB",
    element: <App/>,
  },
  {
    path: "event",
    element: <Events/>,
  },
  {
    path: "blog",
    element: <Blog/>,
  },
  {
    path: "team",
    element: <Team/>,
  },
  {
    path: "gallary",
    element: <Gallary/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
