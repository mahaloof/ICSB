import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Events from './pages/Events.jsx'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/mahaloof",
    element: <App/>,
  },
  {
    path: "event",
    element: <Events/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
