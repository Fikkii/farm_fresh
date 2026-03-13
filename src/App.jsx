import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import ProductSlide from './components/ProductSlide'
import CategoriesSlide from './components/CategoriesSlide'
import TopRatedFarms from './components/TopRatedFarms'

const top_picks = [
  
]

function App() {
  return (
    <div className='w-full bg-[#F2F6F2]'>
    <Navbar />
    <div className="m-4">
      <div className='bg-[url("/hero.png")] bg-cover bg-center h-[480px] rounded-lg flex items-center justify-center text-white text-4xl font-bold'>
      </div>
      <ProductSlide title='Nearby Farms' rated />
      <CategoriesSlide />
      <ProductSlide title="Todays's Fresh Pick" />
      <TopRatedFarms />
    </div>
    </div>
  )
}

export default App
