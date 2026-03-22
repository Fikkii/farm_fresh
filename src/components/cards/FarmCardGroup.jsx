import {Card, CardBody, CardFooter, Image, Skeleton} from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function CardComponent({data, title, isLoading}) {
  const navigate = useNavigate()

  if (isLoading) {
    return (
      <div>
        <div className="flex items-center overflox-x-scroll md:overflow-x-hidden font-bold mt-[48px] justify-between mb-4">
          <div className="text-[26px]">
            {title}
            <div className="font-normal text-lg text-[#757575]">Fresh from our fields this morning</div>
          </div>
        </div>
        <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {[...Array(4)].map((_, index) => (
            <Card key={index} shadow="sm">
              <CardBody className="overflow-visible p-0">
                <Skeleton className="rounded-lg">
                  <div className="h-[192px] rounded-lg bg-default-300"></div>
                </Skeleton>
              </CardBody>
              <CardFooter className="text-small flex-col items-start gap-2">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-3 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <div className="flex justify-between w-full gap-4">
                  <Skeleton className="w-1/4 rounded-lg">
                    <div className="h-3 w-1/4 rounded-lg bg-default-200"></div>
                  </Skeleton>
                  <Skeleton className="w-1/4 rounded-lg">
                    <div className="h-3 w-1/4 rounded-lg bg-default-200"></div>
                  </Skeleton>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center overflox-x-scroll md:overflow-x-hidden font-bold mt-[48px] justify-between mb-4">
        <div className="text-[26px]">
          {title}
          <div className="font-normal text-lg text-[#757575]">Fresh from our fields this morning</div>
        </div>
        <div className="flex gap-2 items-center">
          <span>See More</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-3">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </div>
      </div>
      <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
        {data.map((item, index) => (
          /* eslint-disable no-console */
          <Card key={index} isPressable shadow="sm" onPress={() =>  navigate(`/farms/${item.$id}`)}>
            <CardBody className="overflow-visible p-0">
              <Image
                alt={item.farmName}
                className="w-full object-cover h-[192px]"
                radius="lg"
                shadow="sm"
                src={item.img}
                width="100%"
              />
            </CardBody>
            <CardFooter className="text-small flex-col items-start">
              <div>
                <b className="text-[18px]">{item.farmName}</b>
              </div>
              <div className="flex justify-between w-full gap-4">
              <p className="flex items-center text-[#EAB308]">
                {Number(item.rating || 0).toFixed(1)}
                <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>

              </p>
              <p className="flex items-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                {item.location}
              </p>
          </div>
          </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

