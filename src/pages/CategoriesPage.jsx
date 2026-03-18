import { Button } from "@heroui/react";
import ProductSlide from "../components/ProductSlide";
import { fetchAllProducts, fetchCategories } from "../controllers/productController";
import { useEffect, useState } from "react";

const categories  = [
  "All", "Vegetables", "Meat", "Fruits", "Diary", "Poultry", "Eggs", "Grains"
]

export default function CategoriesPage(){
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")

  useEffect(() => {
    fetchAllProducts().then(products => {
      const categories = []
      products.map(product => {
        product.categories.forEach(category => {
          if(!categories.includes(category)){
            categories.push(category)
          }
        })
      })

      setCategories(categories)
      setProducts(products)
      setFilteredProducts(products)
    }).catch(error => {
      console.error("Error fetching categories", error)})
  }, [])

  function handleFilter (category) {
    if(category === "All"){
      setFilteredProducts(products)
      setSelectedCategory("All")
    } else {
      const filteredProducts = products.filter(product => 
        product.categories.some(prodCat => 
          category == prodCat.name
        )
      );

      console.log(filteredProducts)
      setFilteredProducts(filteredProducts)
      setSelectedCategory(category)
    }
  }
  return (
    <div>
      <h2 className="text-[32px] font-bold">Shop by Categories</h2>
      <div className="text-gray-400">Fresh farm produce delivered directly by local farmers to your doorstep.</div>
      <div className="flex gap-2 mt-[48px]">
          <Button onClick={() => handleFilter("All")} color="success" variant="flat" >All</Button>
        {
          categories.map((value, index) => (
            <Button key={index} className={value.name == selectedCategory ? "bg-green-500 text-white" : ''} onClick={() => handleFilter(value.name)} color="success" variant="flat" >{value.name}</Button>
          ))
        }
      </div>
    <div>
        <ProductSlide title={selectedCategory} data={filteredProducts} type="buy_add" />
    </div>
    </div>
  )
}
