import { Button, Card, CardBody, Image } from "@heroui/react";
import ProductSlide from "../components/ProductSlide";
import { useLoaderData } from "react-router-dom";

export default function FarmDetail(){
  const {farm, products} = useLoaderData();

  console.log(farm[0].products, products)

  return (
    <div>
      <div className="relative">
        <Image
        isZoomed
        alt="HeroUI Fruit Image with Zoom"
        width="100%"
        src={farm[0].img}
        className="h-[350px] bg-black object-cover rounded-lg"
        />

        <div className="absolute bottom-0 left-0 z-10 flex gap-2 flex-col p-[20px] md:p-[40px]">
          <div className="flex gap-2">
            <Button className="rounded-full capitalize text-white font-bold bg-[#4CAF50]" size="sm" color="success">
              {farm[0].status}
            </Button>
            <Button className="rounded-full bg-white/20 border-1 border-white/30 backdrop-blur-lg text-white shadow-xl" variant="flat" size="sm" color="success">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" stroke-width="1.5" stroke="#EAB308" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              {farm[0].rating}
              (120 Reviews)
            </Button>
          </div>
          <h2 className="text-white text-[32px] md:text-[58px] font-bold">
            {farm[0].farmName}
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:grid grid-cols-2 gap-4 mt-6">
        <div className="flex flex-col gap-6">
          <div className="flex gap-5 items-center">
            <div className="w-[15%] md:w-[10%] lg:w-[5%] p-[10px] bg-green-200 border rounded-[10px] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#4CAF50" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </div>
            <div id="direction">
              <h2 className="text-[20px] md:text-[26px] font-bold">{farm[0].location || "No Location for this farm"}</h2>
              <div className="text-[#757575] text-sm md:text-base">
                {farm[0].locationDescription}
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[20px] md:text-[26px] font-bold">About The Farm</h2>
            <div className="text-[#757575] text-sm md:text-base">
              {farm[0].farmDescription || "No description available for this farm."}
            </div>
          </div>
          <Card>
            <CardBody className="overflow-x-auto">
              <div className="flex justify-between md:justify-evenly gap-4 min-w-max md:min-w-0">
                <a href={farm[0].website} className="flex items-center flex-col gap-2 text-[#4CAF50]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-7">
                    <path fillRule="evenodd" d="M3.757 4.5c.18.217.376.42.586.608.153-.61.354-1.175.596-1.678A5.53 5.53 0 0 0 3.757 4.5ZM8 1a6.994 6.994 0 0 0-7 7 7 7 0 1 0 7-7Zm0 1.5c-.476 0-1.091.386-1.633 1.427-.293.564-.531 1.267-.683 2.063A5.48 5.48 0 0 0 8 6.5a5.48 5.48 0 0 0 2.316-.51c-.152-.796-.39-1.499-.683-2.063C9.09 2.886 8.476 2.5 8 2.5Zm3.657 2.608a8.823 8.823 0 0 0-.596-1.678c.444.298.842.659 1.182 1.07-.18.217-.376.42-.586.608Zm-1.166 2.436A6.983 6.983 0 0 1 8 8a6.983 6.983 0 0 1-2.49-.456 10.703 10.703 0 0 0 .202 2.6c.72.231 1.49.356 2.288.356.798 0 1.568-.125 2.29-.356a10.705 10.705 0 0 0 .2-2.6Zm1.433 1.85a12.652 12.652 0 0 0 .018-2.609c.405-.276.78-.594 1.117-.947a5.48 5.48 0 0 1 .44 2.262 7.536 7.536 0 0 1-1.575 1.293Zm-2.172 2.435a9.046 9.046 0 0 1-3.504 0c.039.084.078.166.12.244C6.907 13.114 7.523 13.5 8 13.5s1.091-.386 1.633-1.427c.04-.078.08-.16.12-.244Zm1.31.74a8.5 8.5 0 0 0 .492-1.298c.457-.197.893-.43 1.307-.696a5.526 5.526 0 0 1-1.8 1.995Zm-6.123 0a8.507 8.507 0 0 1-.493-1.298 8.985 8.985 0 0 1-1.307-.696 5.526 5.526 0 0 0 1.8 1.995ZM2.5 8.1c.463.5.993.935 1.575 1.293a12.652 12.652 0 0 1-.018-2.608 7.037 7.037 0 0 1-1.117-.947 5.48 5.48 0 0 0-.44 2.262Z" clipRule="evenodd" />
                  </svg>
                  Website
                </a>
                <div className="flex items-center flex-col gap-2 text-[#4CAF50]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-7">
                    <path fillRule="evenodd" d="m3.855 7.286 1.067-.534a1 1 0 0 0 .542-1.046l-.44-2.858A1 1 0 0 0 4.036 2H3a1 1 0 0 0-1 1v2c0 .709.082 1.4.238 2.062a9.012 9.012 0 0 0 6.7 6.7A9.024 9.024 0 0 0 11 14h2a1 1 0 0 0 1-1v-1.036a1 1 0 0 0-.848-.988l-2.858-.44a1 1 0 0 0-1.046.542l-.534 1.067a7.52 7.52 0 0 1-4.86-4.859Z" clipRule="evenodd" />
                  </svg>

                  Call
                </div>
                <a className="flex items-center flex-col gap-2 text-[#4CAF50]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-7">
                    <path d="M1 8.74c0 .983.713 1.825 1.69 1.943.904.108 1.817.19 2.737.243.363.02.688.231.85.556l1.052 2.103a.75.75 0 0 0 1.342 0l1.052-2.103c.162-.325.487-.535.85-.556.92-.053 1.833-.134 2.738-.243.976-.118 1.689-.96 1.689-1.942V4.259c0-.982-.713-1.824-1.69-1.942a44.45 44.45 0 0 0-10.62 0C1.712 2.435 1 3.277 1 4.26v4.482Z" />
                  </svg>

                  Message
                </a>
                <a href="#direction" className="flex items-center flex-col gap-2 text-[#4CAF50]">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-7">
                    <path fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd" />
                  </svg>
                  Direction
                </a>
              </div>
            </CardBody>
          </Card>
        </div>



        <div className="flex flex-col gap-2">
          <Card>
            <CardBody>
              <div className="flex flex-col gap-2">
                <h2 className="text-[21.04px] font-bold">Opening Hours</h2>
                <div>
                  <div className="flex justify-between">
                    <div className="text-[#757575]">Monday - Friday</div>
                    <div className="font-bold">8:00 AM - 6:00 PM</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[#757575]">Saturday</div>
                    <div className="font-bold">9:00 AM - 5:00 PM</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-[#757575]">Sunday</div>
                    <div className="font-bold text-green-500">Closed</div>
                  </div>
                </div>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=..." // Your copied link
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <ProductSlide title="Available Products" products={products} />
    </div>
  )
}
