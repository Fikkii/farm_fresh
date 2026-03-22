import { databases, storage, ID, Query } from "../lib/appwrite";

const DATABASE_ID = '69b5a810001139b4e286';
const BUCKET_ID = 'productImage';

// Image Upload Helper
export const uploadImage = async (file) => {
  try {
    const response = await storage.createFile(BUCKET_ID, ID.unique(), file);
    return response.$id;
  } catch (error) {
    console.error("Error uploading image:", error);
    throw error;
  }
};

// Delete Image Helper
export const deleteImage = async (imageId) => {
  if (!imageId) return;
  try {
    await storage.deleteFile(BUCKET_ID, imageId);
  } catch (error) {
    console.error("Error deleting image:", error);
  }
};

// --- FARMS ---
export const createFarm = async (data, file) => {
  let imageId = null;
  if (file) {
    imageId = await uploadImage(file);
  }
  return await databases.createDocument(DATABASE_ID, 'farms', ID.unique(), {
    ...data,
    imageId
  });
};

export const updateFarm = async (documentId, data, file) => {
  let imageId = data.imageId;
  if (file) {
    // If there's a new file, upload it and optionally delete the old one
    if (imageId) await deleteImage(imageId);
    imageId = await uploadImage(file);
  }
  return await databases.updateDocument(DATABASE_ID, 'farms', documentId, {
    ...data,
    imageId
  });
};

export const deleteFarm = async (documentId, imageId) => {
  if (imageId) await deleteImage(imageId);
  return await databases.deleteDocument(DATABASE_ID, 'farms', documentId);
};

// --- PRODUCE (PRODUCTS) ---
export const createProduct = async (data, file) => {
  let imageId = null;
  if (file) {
    imageId = await uploadImage(file);
  }
  return await databases.createDocument(DATABASE_ID, 'products', ID.unique(), {
    ...data,
    imageId
  });
};

export const updateProduct = async (documentId, data, file) => {
  let imageId = data.imageId;
  if (file) {
    if (imageId) await deleteImage(imageId);
    imageId = await uploadImage(file);
  }
  return await databases.updateDocument(DATABASE_ID, 'products', documentId, {
    ...data,
    imageId
  });
};

export const deleteProduct = async (documentId, imageId) => {
  if (imageId) await deleteImage(imageId);
  return await databases.deleteDocument(DATABASE_ID, 'products', documentId);
};

export const updateProductStock = async (productId, newStock) => {
  try {
    return await databases.updateDocument(DATABASE_ID, 'products', productId, {
      stockQuantity: newStock
    });
  } catch (error) {
    console.error("Error updating product stock:", error);
    throw error;
  }
};

// --- CATEGORIES ---
export const createCategory = async (data, file) => {
  let imageId = null;
  if (file) {
    imageId = await uploadImage(file);
  }
  return await databases.createDocument(DATABASE_ID, 'categories', ID.unique(), {
    ...data,
    imageId
  });
};

export const updateCategory = async (documentId, data, file) => {
  let imageId = data.imageId;
  if (file) {
    if (imageId) await deleteImage(imageId);
    imageId = await uploadImage(file);
  }
  return await databases.updateDocument(DATABASE_ID, 'categories', documentId, {
    ...data,
    imageId
  });
};

export const deleteCategory = async (documentId, imageId) => {
  if (imageId) await deleteImage(imageId);
  return await databases.deleteDocument(DATABASE_ID, 'categories', documentId);
};
