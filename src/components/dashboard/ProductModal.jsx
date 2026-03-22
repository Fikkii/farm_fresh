import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure
} from "@heroui/react";
import { fetchAllFarms, fetchCategories } from "../../controllers/productController";
import { createProduct, updateProduct } from "../../controllers/adminController";
import FarmModal from "./FarmModal";
import CategoryModal from "./CategoryModal";
import toast from "react-hot-toast";

export default function ProductModal({ isOpen, onOpenChange, product, onSuccess }) {
  const [formData, setFormData] = useState({
    productName: "",
    price: "",
    farms: "",
    categories: [],
    stockQuantity: 0
  });
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [farmsList, setFarmsList] = useState([]);
  const [categoriesList, setCategoriesList] = useState([]);

  // Modals for creating farm/category on the fly
  const farmDisclosure = useDisclosure();
  const categoryDisclosure = useDisclosure();

  const loadDependencies = async () => {
    try {
      const [farms, categories] = await Promise.all([
        fetchAllFarms(),
        fetchCategories()
      ]);
      setFarmsList(farms);
      setCategoriesList(categories);
    } catch (error) {
      console.error("Error loading dependencies:", error);
    }
  };

  useEffect(() => {
    loadDependencies();
  }, []);

  useEffect(() => {
    if (product) {
      setFormData({
        productName: product.productName || "",
        price: product.price || "",
        farms: product.farms?.$id || "",
        categories: product.categories?.map(c => c.$id) || [],
        stockQuantity: product.stockQuantity || 0,
        imageId: product.imageId
      });
    } else {
      setFormData({
        productName: "",
        price: "",
        farms: "",
        categories: [],
        stockQuantity: 0
      });
    }
    setFile(null);
  }, [product, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (onClose) => {
    if (!formData.farms) {
      toast.error("Please select a farm");
      return;
    }
    setIsLoading(true);
    try {
      const dataToSubmit = {
        ...formData,
        price: parseFloat(formData.price),
        stockQuantity: parseInt(formData.stockQuantity)
      };
      
      if (product) {
        await updateProduct(product.$id, dataToSubmit, file);
        toast.success("Product updated successfully");
      } else {
        await createProduct(dataToSubmit, file);
        toast.success("Product created successfully");
      }
      onSuccess();
      onClose();
    } catch (error) {
      toast.error(error.message || "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" size="2xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>{product ? "Edit Produce" : "Create New Produce"}</ModalHeader>
              <ModalBody>
                <div className="flex flex-col gap-4">
                  <Input
                    label="Product Name"
                    name="productName"
                    value={formData.productName}
                    onChange={handleChange}
                    isRequired
                  />
                  <Input
                    label="Price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={handleChange}
                    isRequired
                    startContent={<div className="text-default-400 text-small">$</div>}
                  />
                  
                  <div className="flex gap-2 items-end">
                    <Select
                      label="Farm"
                      name="farms"
                      selectedKeys={formData.farms ? [formData.farms] : []}
                      onChange={(e) => setFormData(prev => ({...prev, farms: e.target.value}))}
                      className="flex-1"
                      isRequired
                    >
                      {farmsList.map((farm) => (
                        <SelectItem key={farm.$id} value={farm.$id}>
                          {farm.farmName}
                        </SelectItem>
                      ))}
                    </Select>
                    <Button color="success" variant="flat" onPress={farmDisclosure.onOpen}>+</Button>
                  </div>

                  <div className="flex gap-2 items-end">
                    <Select
                      label="Categories"
                      name="categories"
                      selectionMode="multiple"
                      selectedKeys={new Set(formData.categories)}
                      onSelectionChange={(keys) => setFormData(prev => ({...prev, categories: Array.from(keys)}))}
                      className="flex-1"
                    >
                      {categoriesList.map((cat) => (
                        <SelectItem key={cat.$id} value={cat.$id}>
                          {cat.name}
                        </SelectItem>
                      ))}
                    </Select>
                    <Button color="success" variant="flat" onPress={categoryDisclosure.onOpen}>+</Button>
                  </div>

                  <Input
                    label="Stock Quantity"
                    name="stockQuantity"
                    type="number"
                    value={formData.stockQuantity}
                    onChange={handleChange}
                    isRequired
                  />

                  <Input
                    type="file"
                    label="Product Image"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button color="success" onPress={() => handleSubmit(onClose)} isLoading={isLoading}>
                  {product ? "Update" : "Create"}
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Quick Add Farm Modal */}
      <FarmModal 
        isOpen={farmDisclosure.isOpen} 
        onOpenChange={farmDisclosure.onOpenChange} 
        onSuccess={loadDependencies}
      />

      {/* Quick Add Category Modal */}
      <CategoryModal 
        isOpen={categoryDisclosure.isOpen} 
        onOpenChange={categoryDisclosure.onOpenChange} 
        onSuccess={loadDependencies}
      />
    </>
  );
}
