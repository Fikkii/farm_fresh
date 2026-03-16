import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { routes } from './routes.jsx'
import { RouterProvider } from 'react-router-dom'
import {HeroUIProvider} from '@heroui/react'
import { UserProvider } from './contexts/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <div>
    <UserProvider>
      <RouterProvider router={routes} >
        <HeroUIProvider>
        </HeroUIProvider>
      </RouterProvider>
    </UserProvider>
  </div>,
)
