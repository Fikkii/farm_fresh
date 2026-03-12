import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'
import { Button } from '@heroui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='grid place-items-center h-screen'>
      <div>
        <h1 className='text-[32px] font-bold'>Page Under Construction</h1>
        check out the
        <div className='flex gap-3'>
          <Link className='w-full' to="/auth/login"><Button className='w-full' color="success">Login</Button></Link>
          <Link to="/auth/verify"><Button color="success">Verify</Button></Link>
          <Link to="/auth/signup"><Button color="success">Signup</Button></Link>
        </div>

      </div>
    </div>
    </>
  )
}

export default App
