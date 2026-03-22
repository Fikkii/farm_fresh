import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  useDisclosure,
  Image,
  Tooltip
} from "@heroui/react";
import { fetchAllProducts } from "../../controllers/productController";
import { deleteProduct } from "../../controllers/adminController";
import ProductModal from "./ProductModal";
import toast from "react-hot-toast";

export default function ProductsTab() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const loadProducts = async () => {
    setIsLoading(true);
    try {
      const data = await fetchAllProducts();
      setProducts(data);
    } catch (error) {
      toast.error("Failed to load products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleEdit = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  const handleDelete = async (product) => {
    if (window.confirm(`Are you sure you want to delete ${product.productName}?`)) {
      try {
        await deleteProduct(product.$id, product.imageId);
        toast.success("Product deleted successfully");
        loadProducts();
      } catch (error) {
        toast.error("Failed to delete product");
      }
    }
  };

  const handleCreate = () => {
    setSelectedProduct(null);
    onOpen();
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Manage Produce</h2>
        <Button color="success" onPress={handleCreate}>Add New Produce</Button>
      </div>

      <Table aria-label="Products table">
        <TableHeader>
          <TableColumn>IMAGE</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>PRICE</TableColumn>
          <TableColumn>FARM</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody isLoading={isLoading} emptyContent={"No products found"}>
          {products.map((product) => (
            <TableRow key={product.$id}>
              <TableCell>
                <Image
                  src={product.img}
                  alt={product.productName}
                  className="w-12 h-12 object-cover rounded-lg"
                  fallbackSrc="https://via.placeholder.com/150"
                />
              </TableCell>
              <TableCell>{product.productName}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.farms?.farmName || "N/A"}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Tooltip content="Edit product">
                    <Button isIconOnly size="sm" variant="light" onPress={() => handleEdit(product)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                      </svg>
                    </Button>
                  </Tooltip>
                  <Tooltip color="danger" content="Delete product">
                    <Button isIconOnly size="sm" variant="light" color="danger" onPress={() => handleDelete(product)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </Button>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <ProductModal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange} 
        product={selectedProduct} 
        onSuccess={loadProducts} 
      />
    </div>
  );
}
