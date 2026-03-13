export default function HowItWorks(){
  return (
    <div className="p-[24px]">
        <h2 className="font-bold text-[26px] my-[24px] text-center">How It Works</h2>
        <div className="flex justify-center gap-[34px]">
          <Card index="1" title="Find nearby farms" description="Enter your location to discover the best local farms in your area." />
          <Card index="2" title="Order fresh produce" description="Browse seasonal catalogs and add fresh items to your cart." />
          <Card index="3" title="Pick up or delivery" description="Choose a convenient pickup location or get it delivered home." />
        </div>
    </div>
  )
}

export function Card({index, title, description}){
  return (
    <div className="p-[24px] w-[425px] bg-white relative">
      <div className="rounded-full h-[40px] top-0 left-0 translate-x-[-50%] translate-y-[-50%] absolute flex justify-center items-center w-[40px] text-white bg-[#4CAF50]">{index}</div>
      <h2 className="font-bold text-[26px]">{title}</h2>
      <p className="text-[#757575]">{description}</p>
    </div>
  )
}
