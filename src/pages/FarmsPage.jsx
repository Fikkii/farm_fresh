import { Button, Input, Select, SelectItem, Skeleton } from "@heroui/react";
import {Card, CardBody, CardFooter, Image} from "@heroui/react";
import { useEffect, useState } from "react";
import { fetchAllFarms } from "../controllers/productController";
import { Link, useNavigate } from "react-router-dom";

export default function FarmsPage(){
  const [farms, setFarms] = useState([])
  const [filteredFarms, setFilteredFarms] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    fetchAllFarms().then(data => {
      setFarms(data)
      setFilteredFarms(data)
      setIsLoading(false)
    }).catch(error => {
      console.error(error)
      setIsLoading(false)
    })
    return () => {
      setFarms([])
    }
  }, [])

  useEffect(() => {
    let result = farms;

    if (searchQuery) {
      result = result.filter(farm => 
        farm.farmName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        farm.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredFarms(result);
  }, [searchQuery, farms]);

  return (
    <div className="mt-[48px]">
      <h2 className="text-[32px] font-bold">Explore Local Farms</h2>
      <div className="text-gray-400">Farm produce delivered straigth from the source to your kitchen</div>
      <div className="mt-[24px] md:mt-[48px] flex flex-col md:flex-row items-center gap-4">

        <Input
            className="w-full md:w-[40%]"
            placeholder="Type to search..."
            type="search"
            variant="bordered"
            value={searchQuery}
            onValueChange={setSearchQuery}
            startContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg> }
          />
      </div>
      
      <div>
        <FarmsList farms={filteredFarms} isLoading={isLoading} />
      </div>
    </div>
  )
}

export function FarmsList({farms, isLoading}){

  if (isLoading) {
    return (
      <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[24px] md:mt-[48px]">
        {[...Array(8)].map((_, index) => (
          <Card key={index} shadow="sm" className="w-full">
            <CardBody className="overflow-visible p-0">
              <Skeleton className="rounded-lg">
                <div className="h-[192px] rounded-lg bg-default-300"></div>
              </Skeleton>
            </CardBody>
            <CardFooter className="text-small flex-col items-start gap-2">
              <div className="flex w-full justify-between">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-1/5 rounded-lg">
                  <div className="h-3 w-1/5 rounded-lg bg-default-200"></div>
                </Skeleton>
              </div>
              <div className="flex justify-between w-full gap-4">
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-3 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
              </div>
              <div className="flex gap-[9px] mt-[9px] w-full">
                <Skeleton className="w-1/4 rounded-lg">
                  <div className="h-6 w-1/4 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-1/4 rounded-lg">
                  <div className="h-6 w-1/4 rounded-lg bg-default-200"></div>
                </Skeleton>
              </div >
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-[24px] md:mt-[48px]">
      {farms.map((farm, index) => (
        <Card key={farm.$id} isPressable shadow="sm" className="w-full">
          <Link to={`/farms/${farm.$id}`}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={farm.name}
              className="w-full object-cover h-[192px]"
              radius="lg"
              shadow="sm"
              src={farm.img || "/products/Green Valley Farm.png"}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small flex-col items-start">
            <div className="flex w-full justify-between">
              <b className="text-[18px] flex items-center gap-1">
                {farm.farmName} 
                <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-4">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                </svg>
              </b>
              {farm.distance}
            </div>
            <div className="flex justify-between w-full gap-4">
            <p className="flex items-center gap-2 text-[#EAB308]">
              {Number(farm.rating || 0).toFixed(1)}
              <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg> (244 reviews)<span className="text-green-300">Same Day Delivery</span>
            </p>
        </div>
            <div className="flex gap-[9px] mt-[9px] overflow-x-auto items-center text-gray-500">
              {farm.productTags?.map((tag) => (
                <div key={tag} className="p-[4.5px] bg-[#E4F3E4] rounded-[9px]">{tag}</div>
              ))}
            </div >
        </CardFooter>
        </Link>
        </Card>
      ))}
    </div>
  );
}

