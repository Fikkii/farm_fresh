import { Button } from "@heroui/react";
import ProductSlide from "../components/ProductSlide";
import { fetchCategories } from "../controllers/productController";
import { useEffect, useState } from "react";

const categories  = [
  "All", "Vegetables", "Meat", "Fruits", "Diary", "Poultry", "Eggs", "Grains"
]

export default function CategoriesPage(){
  const [categories, setCategories] = useState([])

  useEffect(() => {
    fetchCategories().then(categories => {
      console.log(categories)
      setCategories(categories)
    }).catch(error => {
      console.error("Error fetching categories", error)})
  }, [])
  return (
    <div>
      <h2 className="text-[32px] font-bold">Shop by Categories</h2>
      <div className="text-gray-400">Fresh farm produce delivered directly by local farmers to your doorstep.</div>
      <div className="flex gap-2 mt-[48px]">
        {
          categories.map((value, index) => (
            <Button key="index" color="success" variant="flat" >{value}</Button>
          ))
        }
      </div>
    <div>
        {
          categories.map((value, index) => (
            <ProductSlide key={index} title={value} type="buy_add" />
          ))
        }
    </div>
    </div>
  )
}
