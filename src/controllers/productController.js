import { Query } from "appwrite";
import { databases, storage } from "../lib/appwrite"

export const fetchFarm = async (farmId) => {
  const result = await databases.listDocuments(
    '69b5a810001139b4e286',
    'farms',
    [
        // Filter products where the 'farm' relationship matches this ID
        Query.equal('$id', farmId),
        Query.limit(1)
    ]
  );

  const farmWithImages = result.documents.map(farm => {
    if (farm.imageId) {
      const imageUrl = storage.getFileView("productImage",farm.imageId);
      return { ...farm, img: imageUrl };
    }
    return farm;
  });

  return farmWithImages;
};

export const fetchFarmProducts = async (farmId) => {
  const result = await databases.listDocuments(
    '69b5a810001139b4e286', // Database ID
    'products',             // Collection ID
    [
      Query.equal('farms', farmId),
      Query.select(['*', 'categories.*']) 
    ]
  );

  const productsWithImages = result.documents.map(product => {
    if (product.imageId) {
      const imageUrl = storage.getFileView("productImage",product.imageId);
      return { ...product, img: imageUrl };
    }
    return product;
  });

  return productsWithImages;
};

export const fetchAllProducts = async () => {
  try {
    const result = await databases.listDocuments(
      '69b5a810001139b4e286',
      'products',
      [
        Query.orderDesc('$createdAt'),
        Query.select(['*', 'categories.*', 'farms.*']) 
      ] 
    );


  const productsWithImages = result.documents.map(product => {
    if (product.imageId) {
      const imageUrl = storage.getFileView("productImage",product.imageId);
      return { ...product, img: imageUrl };
    }
    return product;
  });

    return productsWithImages;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return []; 
  }
};

export const fetchAllFarms = async () => {
  try {
    const result = await databases.listDocuments(
      '69b5a810001139b4e286',
      'farms',   // Replace with your Farms Collection ID
      [
        Query.orderDesc('$createdAt'), // Sort by newest
        Query.limit(100)               // Fetch up to 100 farms
      ]
    );

  const farmWithImages = result.documents.map(farm => {
    if (farm.imageId) {
      const imageUrl = storage.getFileView("productImage",farm.imageId);
      return { ...farm, img: imageUrl };
    }
    return farm;
  });
    
    return farmWithImages;
  } catch (error) {
    console.error("Error fetching farms:", error.message);
    throw error;
  }
};

export const fetchProduct = async (productId) => {
  try {
    const result = await databases.listDocuments(
      '69b5a810001139b4e286',
      'products',
      [
        Query.equal('$id', productId),
        Query.limit(1),
        Query.select(['*', 'categories.*', 'farms.*']) 
      ]
    );

    if (result.documents.length === 0) {
      throw new Error("Product not found");
    }

    const product = result.documents[0];

    if (product.imageId) {
      const imageUrl = storage.getFileView("productImage",product.imageId);
      return { ...product, img: imageUrl };
    }

    return product;
  } catch (error) {
    console.error("Error fetching product:", error.message);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const response = await databases.listDocuments(
      '69b5a810001139b4e286',
      'categories',
      [
        Query.orderAsc('name'),
        Query.limit(100)
      ]
    );

    const categoriesWithImages = response.documents.map(category => {
      if (category.imageId) {
        const imageUrl = storage.getFileView("productImage", category.imageId);
        return { ...category, img: imageUrl };
      }
      return category;
    });

    return categoriesWithImages;
  } catch (error) {
    console.error("Error fetching categories:", error.message);
    throw error;
  }
};


