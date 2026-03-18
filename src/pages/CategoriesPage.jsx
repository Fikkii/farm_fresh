import { Button, Skeleton } from "@heroui/react";
import ProductSlide from "../components/ProductSlide";
import { fetchAllProducts, fetchCategories } from "../controllers/productController";
import { useEffect, useState } from "react";

export default function CategoriesPage(){
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchAllProducts().then(products => {
      const uniqueCategories = []
      products.forEach(product => {
        product.categories.forEach(category => {
          if(!uniqueCategories.some(c => c.$id === category.$id)){
            uniqueCategories.push(category)
          }
        })
      })

      setCategories(uniqueCategories)
      setProducts(products)
      setFilteredProducts(products)
      setIsLoading(false)
    }).catch(error => {
      console.error("Error fetching categories", error)
      setIsLoading(false)
    })
  }, [])

  function handleFilter (categoryName) {
    if(categoryName === "All"){
      setFilteredProducts(products)
      setSelectedCategory("All")
    } else {
      const filtered = products.filter(product => 
        product.categories.some(prodCat => 
          categoryName == prodCat.name
        )
      );

      setFilteredProducts(filtered)
      setSelectedCategory(categoryName)
    }
  }

  return (
    <div>
      <h2 className="text-[32px] font-bold">Shop by Categories</h2>
      <div className="text-gray-400">Fresh farm produce delivered directly by local farmers to your doorstep.</div>
      <div className="flex gap-2 mt-[48px] overflow-x-auto pb-2 no-scrollbar">
          {isLoading ? (
            [...Array(6)].map((_, index) => (
              <Skeleton key={index} className="rounded-lg h-10 w-24 flex-shrink-0" />
            ))
          ) : (
            <>
              <Button onClick={() => handleFilter("All")} color="success" variant={selectedCategory === "All" ? "solid" : "flat"} className={`min-w-fit ${selectedCategory === "All" ? "text-white" : ""}`}>All</Button>
              {
                categories.map((value, index) => (
                  <Button key={index} className={`${value.name == selectedCategory ? "bg-green-500 text-white" : ''} min-w-fit`} onClick={() => handleFilter(value.name)} color="success" variant={value.name == selectedCategory ? "solid" : "flat"} >{value.name}</Button>
                ))
              }
            </>
          )}
      </div>
    <div>
        <ProductSlide title={selectedCategory} products={filteredProducts} type="buy_add" isLoading={isLoading} />
    </div>
    </div>
  )
}
