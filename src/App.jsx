import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductSlide from './components/ProductSlide'
import CategoriesSlide from './components/CategoriesSlide'
import TopRatedFarms from './components/TopRatedFarms'
import WhyShop from './components/WhyShop'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import { Button } from '@heroui/react'

const top_picks = [
  
]

function App() {
  return (
    <div className='w-full bg-[#F2F6F2]'>
    <Navbar />
    <div className="m-4">
      <div className='bg-[url("/hero.jpg")] bg-cover bg-center h-[480px] rounded-lg flex flex-col items-start justify-center text-white'>
          <div className='ml-[93px]'>
            <h2 className='font-bold text-[58px] w-[429px]'>Freshness Delivered From Local Farms</h2>
            <div className='w-[505px] text-[#F1F5F9]'>Support your local community and enjoy the highest quality
  organic produce delivered straight to your doorstep.</div>
            <div className='flex gap-4 mt-[24px]'>
                <Button className='text-white rounded-[5px]' color="success">Shop Now</Button>
                <Button className='text-white rounded-[5px] border border-white' color="success" variant='light'>Start Selling</Button>
            </div>
          </div>
        </div>
        <ProductSlide title='Nearby Farms' rated />
        <CategoriesSlide />
        <ProductSlide title="Todays's Fresh Pick" />
        <TopRatedFarms />
        <WhyShop />
        <HowItWorks />
      </div>
      <Footer />
    </div>
  )
}

export default App
