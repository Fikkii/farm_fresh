import { Button } from "@heroui/react"

export default function CategoriesSlide(){
  const categories = [
    {
      name: "Vegetables",
      image: "/categories/Fruits-1.png"
    },
    {
      name: "Fruits",
      image: "/categories/Fruits-1.png"
    },
    {
      name: "Grains",
      image: "/categories/Fruits-1.png"
    },
    {
      name: "Diaries",
      image: "/categories/Fruits-1.png"
    },
  ]
  return (
    <div>
      <div className="flex gap-2 items-center font-bold text-[26px] mt-[48px]">
        Shop By Category
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
          <path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div className="flex overflow-x-scroll gap-[12px] mt-2 overflow-x-scroll md:overflow-x-hidden">
      {
        categories.map((cat, index) => (
          <Button color="success" className="text-white" key={index}>{cat.name}</Button>
        ))
      }
      </div>
      <div className="md:flex hidden overflow-x-scroll gap-[24px] overflow-x-scroll md:overflow-x-hidden">
      {
        categories.map((cat, index) => (
          <CategoryCard key={index} title={cat.name} image={cat.image} borderColor={index % 2 === 0 ? "red" : "blue"} />
        ))
      }
      </div>
    </div>
  )
}

export function CategoryCard({title = "Meat", image = "/categories/Fruits.png", borderColor="red"}){
  return (
    <div style={{ borderColor: borderColor }} className="border relative mt-[36px] grid place-items-center rounded-[24px] bg-white w-[233px] h-[245px]">
      <img src={image} className="h-[70%]" />
      <span className="px-[12px] py-[3.5px] bg-red-500 text-white absolute top-2 left-2 rounded-[6px]">{title}</span>
    </div>
  )
}
