export default function HowItWorks(){
  return (
    <div className="p-6 md:p-12 bg-gray-50/50 rounded-2xl mt-12">
        <h2 className="font-bold text-2xl md:text-[32px] mb-8 md:mb-12 text-center">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-6xl mx-auto">
          <Card index="1" title="Find nearby farms" description="Enter your location to discover the best local farms in your area." />
          <Card index="2" title="Order fresh produce" description="Browse seasonal catalogs and add fresh items to your cart." />
          <Card index="3" title="Pick up or delivery" description="Choose a convenient pickup location or get it delivered home." />
        </div>
    </div>
  )
}

export function Card({index, title, description}){
  return (
    <div className="p-8 bg-white relative rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left transition-all hover:shadow-md">
      <div className="rounded-full h-10 w-10 flex justify-center items-center text-white bg-[#4CAF50] font-bold text-lg mb-4 md:absolute md:-top-5 md:left-8 md:mb-0 shadow-lg">
        {index}
      </div>
      <h2 className="font-bold text-xl md:text-2xl mb-2">{title}</h2>
      <p className="text-[#757575] text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  )
}
