export default function WhyShop(){
  return (
    <div className="mt-[48px]">
      <div>
        <h2 className="font-bold text-[26px] text-center">Why Shop on FarmFresh</h2>
        <div className="text-center text-[#757575]">Experience the difference of food grown with care and delivered with passion</div>
      </div>
      <div className="flex justify-center items-center mt-[24px] bg-[#2E7D3233] h-[300px] p-[24px]">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export function Card({img="/why/fa-solid_hands-helping.png", title="Freshly Harvested", description="Picked at peak ripeness and delivered within hours."}){
  return (
    <div className="flex flex-col items-center gap-[8px] w-[259px]">
      <img src={img} />
      <h2 className="font-bold text-[26px]">{title}</h2>
      <div className="text-center mt-[9px] text-[#757575]">{description}</div>
    </div>
  )
}
