import RatedCard from "../components/cards/RatedCard";
import PricedCard from "../components/cards/PricedCard";

export default function ProductSlide({ title = "Featured Products", products = null, type }) {
  let card;

  switch (type) {
    case "rated":
      card = <RatedCard products={products} />;
      break;
    case "priced":
      card = <PricedCard products={products} />;
      break;
    case "buy_add":
      card = <CartCard products={products} />;
      break;
    default:
      card = <PricedCard products={products} />;
  }

  return (
    <div className="w-full my-4">
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
      <div>
        {card}
      </div>
    </div>
  );
}

import {Button, Card, CardBody, CardFooter, Image} from "@heroui/react";

export function CartCard({products}) {
  let list = products
  if (!products){
    list = [
      {
        title: "Green Valley Farm",
        img: "/products/Green Valley Farm.png",
        price: "$4800",
        measurement: "kg",
      },
      {
        title: "Tangerine",
        img: "/products/Organic Orchards-1.png",
        price: "$3520",
        measurement: "kg",
      },
      {
        title: "Raspberry",
        img: "/products/Organic Orchards.png",
        price: "$3520.2",
        measurement: "kg",
      },
      {
        title: "Lemon",
        img: "/products/Sunrise Poultry.png",
        price: "$350",
        measurement: "kg",
      },
    ];
}

  return (
    <div className="gap-[24px] grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index} className={index % 2 == 0 ? "bg-[#EAF7EE]" : "bg-[#FBF4E7]"} isPressable shadow="sm" onPress={() => console.log("item pressed")}>
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
            <div className="flex w-full justify-between">
              <span className="text-[16px] font-bold">{item.productName}</span>
              <div className="px-[6px] py-[2px] bg-green-200 rounded-full">Fresh</div>
            </div>
            <div className="flex justify-between mt-2 w-full gap-4">
              <div>
                <span className="font-bold">{item.price}</span>/ kg
              </div>
            </div>
            <div className="w-full mt-[4px]">
              <Button className="w-full text-white" color="success">Add to Cart</Button>
            </div>
        </CardFooter>
        </Card>
      ))}
    </div>
  );
}

