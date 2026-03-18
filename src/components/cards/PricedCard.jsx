import {Card, CardBody, CardFooter, Image} from "@heroui/react";
import { useNavigate } from "react-router-dom";

export default function CardComponent({data}) {
  let list = data
  const navigate = useNavigate();

  return (
    <div className="gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
      {list?.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index} className={index % 2 == 0 ? "bg-[#EAF7EE]" : "bg-[#FBF4E7]"} isPressable shadow="sm" onPress={() => navigate(`/product/${item.$id}`)}>
          <CardBody className="overflow-visible p-2">
            <Image
              alt={item.productName}
              className="w-full object-cover h-[192px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small flex-col items-start">
            <div>
              <span className="text-[14px]">{item.productName}</span>
            </div>
            <div className="flex justify-between w-full gap-4">
              <div>
                <span className="font-bold">{item.price}</span>/kg
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="#66BB6A" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </div>
        </CardFooter>
        </Card>
      ))}
    </div>
  );
}

