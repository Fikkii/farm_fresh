const data = [
  {
    name: "Green Valley",
    rating: "4.5",
    tag: "Organic Vegetables"
  },
  {
    name: "Green Valley",
    rating: "4.5",
    tag: "Organic Vegetables"
  },
  {
    name: "Green Valley",
    rating: "4.5",
    tag: "Organic Vegetables"
  },
  {
    name: "Green Valley",
    rating: "4.5",
    tag: "Organic Vegetables"
  },
]

export default function TopRatedFarms(){
  return (
    <div className="w-full mt-[48px]">
      <div className="flex items-center font-bold justify-between mb-4">
        <div>Top Rated</div>
        <div className="flex text-[#2E7D32] gap-2 items-center">
          <span>See More</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div className="bg-[#FAFAFA] p-[24px] flex flex-col md:flex-row gap-[9px]">
        <Card color="#F8E4E4" img="/farms/image-1.png" />
        <Card color="#EAF7EE" img="/farms/image-2.png" />
        <Card color="#FBF4E7" img="/farms/image.png" />
      </div>
    </div>
  )
}

export function Card ({ img, color="blue" }){
  return (
    <div style={{ backgroundColor: color }} className="flex p-[24px] w-full gap-[74px] rounded-[10px]">
      <img className="w-[96px]" src={img} />
      <div>
        <div className="font-bold">Green Valley</div>
        <div className="flex gap-2 items-center text-[#757575] text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EAB308" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>

          4.9 reviews
        </div>
        <div className="text-sm text-[#757575]">Organic Vegetables</div>
      </div>
    </div>
  )
}
