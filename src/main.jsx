import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import App from './App'
import { Stadisticas } from './pages/Stadisticas'
import { LayoutDashboard } from './pages/layouts/LayoutDashboard'
// import { RoutesApp } from './routes/RoutesApp.jsx'
const router = createHashRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/estadisticas',
    element: <Stadisticas />
  }
  ,
  {
    path: '/dashboard',
    element: <LayoutDashboard />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
