import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { routes } from './routes.jsx'
import { RouterProvider } from 'react-router-dom'
import {HeroUIProvider} from '@heroui/react'
import { UserProvider } from './contexts/userContext.jsx'
import { CartProvider } from './contexts/cartContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <HeroUIProvider>
          <Toaster position="top-center" reverseOrder={false} />
          <RouterProvider router={routes} />
        </HeroUIProvider>
      </CartProvider>
    </UserProvider>
  </StrictMode>,
)
