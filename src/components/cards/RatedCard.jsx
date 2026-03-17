import {Card, CardBody, CardFooter, Image} from "@heroui/react";

export default function CardComponent({products}) {
  let list = products
  if (!products){
    list = [
      {
        title: "Green Valley Farm",
        img: "/products/Green Valley Farm.png",
        rating: "4.8",
        distance: "2.5km",
      },
      {
        title: "Tangerine",
        img: "/products/Organic Orchards-1.png",
        rating: "4.8",
        distance: "1.2km",
      },
      {
        title: "Raspberry",
        img: "/products/Organic Orchards.png",
        rating: "4.2",
        distance: "3.8km",
      },
      {
        title: "Lemon",
        img: "/products/Sunrise Poultry.png",
        rating: "3.5",
        distance: "0.8km",
      },
    ];
}

  return (
    <div className="gap-[24px] flex flex-col md:grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              alt={item.title}
              className="w-full object-cover h-[192px]"
              radius="lg"
              shadow="sm"
              src={item.img}
              width="100%"
            />
          </CardBody>
          <CardFooter className="text-small flex-col items-start">
            <div>
              <b className="text-[18px]">{item.title}</b>
            </div>
            <div className="flex justify-between w-full gap-4">
            <p className="flex items-center text-[#EAB308]">
              {item.rating}
              <svg xmlns="http://www.w3.org/2000/svg" fill="#EAB308" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>

            </p>
            <p className="flex items-center text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              {item.distance}
            </p>
        </div>
        </CardFooter>
        </Card>
      ))}
    </div>
  );
}

