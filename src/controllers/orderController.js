import { databases, ID } from "../lib/appwrite";

const DATABASE_ID = '69b5a810001139b4e286';
const COLLECTION_ID = 'orders';

export const saveOrder = async (user, totalAmount, paymentReference, items, status = "paid") => {
  if (!user) {
    console.error("No user provided to saveOrder");
    throw new Error("User must be logged in to save an order");
  }

  try {
    const orderData = {
      userId: user.$id,
      userName: user.name || "Unknown User",
      userEmail: user.email || "No Email",
      totalAmount: parseFloat(totalAmount),
      status: status,
      paymentReference: String(paymentReference || "N/A"),
      items: items.map(item => JSON.stringify({
        productId: item.$id || item.productId,
        productName: item.productName || "Product",
        price: item.price,
        quantity: item.quantity || 1
      }))
    };

    console.log("Saving order with data:", orderData);

    const response = await databases.createDocument(
      DATABASE_ID,
      COLLECTION_ID,
      ID.unique(),
      orderData
    );
    
    console.log("Order saved successfully:", response);
    return response;
  } catch (error) {
    console.error("Detailed error in saveOrder:", error);
    // Log the specific Appwrite error message if available
    if (error.message) console.error("Appwrite error message:", error.message);
    throw error;
  }
};
