import { Skeleton } from "@heroui/react"

export default function TopRatedFarms({data, isLoading}){
  let farms = data?.filter(farm => farm.rating >= 3.5).slice(0, 3) || []

  if (isLoading) {
    return (
      <div className="w-full mt-[48px]">
        <div className="flex items-center font-bold justify-between mb-4">
          <div>Top Rated</div>
        </div>
        <div className="bg-[#FAFAFA] p-4 md:p-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, index) => (
            <Card key={index} isLoading={true} />
          ))}
        </div>
      </div>
    );
  }

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
      <div className="bg-[#FAFAFA] p-4 md:p-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {farms.map((farm, index) => (
          <Card key={index} color={index % 2 == 0 ? "#F8E4E4" : "#EAF7EE"} name={farm.farmName} rating={farm.rating} img={farm.img} />
        ))}
      </div>
    </div>
  )
}

export function Card ({ img, name, color="blue", rating, isLoading }){
  if (isLoading) {
    return (
      <div className="flex p-4 md:p-[24px] w-full gap-4 md:gap-6 lg:gap-10 rounded-[10px] items-center bg-default-100">
        <Skeleton className="rounded-md">
          <div className="w-16 md:w-20 lg:w-[96px] h-16 md:h-20 lg:h-[96px] bg-default-300"></div>
        </Skeleton>
        <div className="flex-1 space-y-2">
          <Skeleton className="w-3/4 rounded-lg">
            <div className="h-4 w-3/4 bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-1/2 rounded-lg">
            <div className="h-3 w-1/2 bg-default-200"></div>
          </Skeleton>
          <Skeleton className="w-1/4 rounded-lg">
            <div className="h-3 w-1/4 bg-default-200"></div>
          </Skeleton>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: color }} className="flex p-4 md:p-[24px] w-full gap-4 md:gap-6 lg:gap-10 rounded-[10px] items-center">
      <img className="w-16 md:w-20 lg:w-[96px] h-16 md:h-20 lg:h-[96px] object-cover rounded-md" src={img} alt={name} />
      <div className="flex-1">
        <div className="font-bold text-base md:text-lg truncate max-w-[150px] md:max-w-none">{name}</div>
        <div className="flex gap-2 items-center text-[#757575] text-xs md:text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#EAB308" className="size-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
        </svg>

          {rating} reviews
        </div>
        <div className="text-xs md:text-sm text-[#757575]">Organic Vegetables</div>
      </div>
    </div>
  )
}
