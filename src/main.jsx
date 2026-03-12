import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { routes } from './routes.jsx'
import { RouterProvider } from 'react-router-dom'
import {HeroUIProvider} from '@heroui/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <HeroUIProvider>
        <RouterProvider router={routes} />,
      </HeroUIProvider>
  </StrictMode>,
)
