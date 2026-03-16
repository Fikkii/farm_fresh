import './App.css'
import ProductSlide from './components/ProductSlide'
import CategoriesSlide from './components/CategoriesSlide'
import TopRatedFarms from './components/TopRatedFarms'
import WhyShop from './components/WhyShop'
import HowItWorks from './components/HowItWorks'
import { Button } from '@heroui/react'

const top_picks = [
  
]

function App() {
  return (
    <div>
<div className='bg-[url("/hero.jpg")] bg-cover bg-center h-[400px] md:h-[480px] rounded-lg flex flex-col items-center md:items-start justify-center text-white px-6 md:px-0'>
  <div className='md:ml-[93px] text-center md:text-left max-w-xl'>
    {/* Heading: Smaller on mobile, large on desktop */}
    <h2 className='font-bold text-[32px] md:text-[58px] leading-tight max-w-[300px] md:max-w-[429px] mx-auto md:mx-0'>
      Freshness Delivered From Local Farms
    </h2>

    {/* Subtext: Fluid width with a max-cap */}
    <div className='mt-4 text-[#F1F5F9] text-sm md:text-base max-w-[505px]'>
      Support your local community and enjoy the highest quality
      organic produce delivered straight to your doorstep.
    </div>

    {/* Buttons: Stacked on tiny screens, side-by-side on mobile/desktop */}
    <div className='flex flex-wrap justify-center md:justify-start gap-4 mt-[24px]'>
      <Button className='text-white rounded-[5px] w-full sm:w-auto' color="success">
        Shop Now
      </Button>
      <Button className='text-white rounded-[5px] border border-white w-full sm:w-auto' color="success" variant='light'>
        Start Selling
      </Button>
    </div>
  </div>
</div>
        <ProductSlide title='Nearby Farms' type="rated" />
        <CategoriesSlide />
        <ProductSlide title="Todays's Fresh Pick" />
        <TopRatedFarms />
        <WhyShop />
        <HowItWorks />
    </div>
  )
}

export default App
