import { Button, Card, CardBody, Image, Input } from "@heroui/react";
import ProductSlide from "../components/ProductSlide";

export default function ProductDetail(){
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <Image
        isZoomed
        alt="HeroUI Fruit Image with Zoom"
        src="/products/Sunrise Poultry.png"
        className="h-[460px] w-[100%] bg-black object-cover rounded-lg"
        />

        <Card>
          <CardBody className="flex flex-col gap-4 p-[24px]">
            <Button className="rounded-full w-[fit-content] text-white font-bold bg-[#4CAF50]" size="sm" color="success">
              In Stock
            </Button>
            <div>
              <h2 className="text-[34px] font-bold">Tomatoes</h2>
              <div className="flex items-center font-bold gap-1">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EAB308" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EAB308" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EAB308" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EAB308" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EAB308" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                  </svg>
                </div>
                4.8 (120 Reviews)
                <span className="text-[#66BB6A] font-normal">Same Day Delivery</span>
              </div>
            </div>
            <div className="p-[24px] bg-[#F2F6F2] shadow-sm rounded-lg">
              <h2 className="text-[34px] font-bold mb-2">$4000<span className="font-normal text-sm text-gray-400">/ kg</span></h2>
              <h2 className="font-bold text-gray-400 mb-2">$4000/ <span className="font-normal text-sm text-gray-400">kg</span></h2>
            </div>
            <div className="p-[24px] flex flex-col gap-[16px]">
              <div className="flex gap-4 items-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#4CAF50"><path d="M20.998 3V5C20.998 8.86599 17.864 12 13.998 12H12.998V13H17.998V20C17.998 21.1046 17.1026 22 15.998 22H7.99805C6.89348 22 5.99805 21.1046 5.99805 20V13H10.998V10C10.998 6.13401 14.1321 3 17.998 3H20.998ZM5.49805 2C8.02667 2 10.263 3.25136 11.6216 5.1686C10.6026 6.51084 9.99805 8.18482 9.99805 10V11H9.49805C5.35591 11 1.99805 7.64214 1.99805 3.5V2H5.49805Z"></path></svg>
                <div>
                  <div className="text-[#757575]"> Farm: </div>
                  <div className="text-[16px] font-bold">Sunrise Harvest Farm</div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#4CAF50"><path d="M18.364 17.364L12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"></path></svg>
                <div>
                  <div className="text-[#757575]"> Location: </div>
                  <div className="text-[16px] font-bold">8 Asa Dam Road, Ilorin, Kwara State</div>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="#4CAF50"><path d="M2 11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11ZM17 3H21C21.5523 3 22 3.44772 22 4V9H2V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3Z"></path></svg>
                <div>
                  <div className="text-[#757575]"> Harvested on: </div>
                  <div className="text-[16px] font-bold">March 16, 2026</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="flex gap-1 w-full w-max-[100px]">
                <Button className="text-white" color="success">+</Button>
                <Input classNames={{ base: "w-[60px] text-center" }} defaultValue={1} />
                <Button className="text-white" color="success">-</Button>
                <Button className="ml-4 text-white font-bold w-full" color="success">Add to Cart</Button>
              </div>
              <div>
                <Button className="px-[16px] bg-white hover:bg-green-500 hover:text-white border py-[16px] font-bold w-full" color="success" variant="flat">Buy Now</Button>
              </div>
              <div className="flex gap-2 border-t border-gray-300">
                <div className="text-[14px] text-[#757575] flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="green"><path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path></svg>
                  Organic Certified
                </div>
                <div className="text-[14px] text-[#757575] flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="green"><path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12ZM12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM17.4571 9.45711L16.0429 8.04289L11 13.0858L8.20711 10.2929L6.79289 11.7071L11 15.9142L17.4571 9.45711Z"></path></svg>
                  Same Day Delivery
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <ProductSlide title="You might also like" highlight="Fresh from our fields this morning" />
    </div>
  )
}
        
