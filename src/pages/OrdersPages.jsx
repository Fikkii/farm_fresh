import { Button, Card, CardBody, Image, Divider, Spinner, RadioGroup, Radio, Input, Checkbox } from "@heroui/react";
import { useCart } from "../contexts/cartContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../contexts/userContext";
import { usePaystackPayment } from "react-paystack";
import { useState } from "react";
import toast from "react-hot-toast";
import { saveOrder } from "../controllers/orderController";
import React from "react";

export default function OrdersPage() {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems, clearCart } = useCart();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);

  // Delivery states
  const [deliveryType, setDeliveryType] = useState("pickup");
  const [addressInfo, setAddressInfo] = useState({
    address: "",
    city: "",
    state: "",
    saveAddress: false
  });

  const deliveryFee = deliveryType === "home" ? 1500 : 0;
  const grandTotal = totalPrice + deliveryFee;

  // 1. Stable reference state to prevent re-render disconnects
  const [paymentRef, setPaymentRef] = useState(() => (new Date()).getTime().toString());

  // Paystack Configuration
  const config = {
    reference: paymentRef, // 2. Using the stable reference
    email: user?.email || "",
    amount: Math.round(grandTotal * 100), // Paystack expects amount in kobo/cents
    publicKey: 'pk_test_71133a49d4fa2f3e24d489e6ac3d4d8b8ec46951',
  };

  const onSuccess = async (reference) => {
    setIsProcessing(true);
    try {
      await saveOrder(user, grandTotal, reference.reference, cart, "paid");
      toast.success("Payment Successful! Order placed.");
      clearCart();
      navigate("/order-history");
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("Payment successful but failed to save order details. Please contact support.");
    } finally {
      setIsProcessing(false);
      // 3. Reset the reference so a new one is ready for future transactions
      setPaymentRef((new Date()).getTime().toString());
    }
  };

  const onClose = async () => {
    toast.error("Payment cancelled.");
    try {
      await saveOrder(user, grandTotal, config.reference, cart, "failed");
    } catch (error) {
      console.error("Error saving failed order:", error);
    }
    setIsProcessing(false);
    // 3. Reset the reference here as well
    setPaymentRef((new Date()).getTime().toString());
  };

  const initializePayment = usePaystackPayment(config);

  const handleCheckout = () => {
    if (!user) {
      toast.error("Please login to proceed with checkout");
      navigate("/auth/login", { state: { from: location.pathname } });
      return;
    }

    if (deliveryType === "home" && (!addressInfo.address || !addressInfo.city || !addressInfo.state)) {
      toast.error("Please provide complete delivery address info");
      return;
    }

    setIsProcessing(true);
    // 4. Passing callbacks as a configuration object
    initializePayment({ onSuccess, onClose });
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
        <div className="p-6 bg-green-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 text-green-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.112 11.218a.75.75 0 0 1-.747.825H4.03a.75.75 0 0 1-.747-.825L4.394 8.507a.75.75 0 0 1 .747-.682h13.923a.75.75 0 0 1 .747.682Z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold">Your cart is empty</h2>
        <p className="text-gray-500">Looks like you haven't added any fresh produce yet.</p>
        <Button as={Link} to="/categories" color="success" className="text-white font-bold">
          Start Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">My Orders / Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          {cart.map((item) => (
            <Card key={item.$id} shadow="sm">
              <CardBody className="flex flex-row gap-4 p-4">
                <Image
                  src={item.img}
                  alt={item.productName}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg">{item.productName}</h3>
                      <p className="text-gray-500 text-sm">from {item.farms?.farmName || "Local Farm"}</p>
                    </div>
                    <Button 
                      isIconOnly 
                      color="danger" 
                      variant="light" 
                      onPress={() => removeFromCart(item.$id)}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                      </svg>
                    </Button>
                  </div>
                  
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-2">
                      <Button 
                        size="sm" 
                        isIconOnly 
                        variant="flat" 
                        color="success"
                        onPress={() => updateQuantity(item.$id, (item.quantity || 1) - 1)}
                      >
                        -
                      </Button>
                      <span className="w-8 text-center font-bold">{item.quantity || 1}</span>
                      <Button 
                        size="sm" 
                        isIconOnly 
                        variant="flat" 
                        color="success"
                        onPress={() => updateQuantity(item.$id, (item.quantity || 1) + 1)}
                      >
                        +
                      </Button>
                    </div>
                    <div className="font-bold text-lg">
                      ${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="lg:col-span-1 flex flex-col gap-6">
          <Card className="p-4" shadow="sm">
            <h2 className="text-xl font-bold mb-4">Delivery Options</h2>
            <div className="flex flex-col gap-4">
              <div 
                className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${deliveryType === 'pickup' ? 'border-green-600 bg-green-50' : 'border-gray-100'}`}
                onClick={() => setDeliveryType('pickup')}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${deliveryType === 'pickup' ? 'border-green-600' : 'border-gray-300'}`}>
                    {deliveryType === 'pickup' && <div className="w-2.5 h-2.5 rounded-full bg-green-600" />}
                  </div>
                  <div>
                    <p className="font-bold">Farm Pickup</p>
                    <p className="text-xs text-gray-500">Pick it up yourself</p>
                  </div>
                </div>
                <p className="font-bold text-green-600">FREE</p>
              </div>

              <div 
                className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all ${deliveryType === 'home' ? 'border-green-600 bg-green-50' : 'border-gray-100'}`}
                onClick={() => setDeliveryType('home')}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${deliveryType === 'home' ? 'border-green-600' : 'border-gray-300'}`}>
                    {deliveryType === 'home' && <div className="w-2.5 h-2.5 rounded-full bg-green-600" />}
                  </div>
                  <div>
                    <p className="font-bold">Home Delivery</p>
                    <p className="text-xs text-gray-500">Delivered to your door</p>
                  </div>
                </div>
                <p className="font-bold">₦1,500</p>
              </div>

              {deliveryType === "home" && (
                <div className="mt-4 flex flex-col gap-3 p-4 bg-gray-50 rounded-xl animate-in fade-in duration-300">
                  <Input 
                    label="Delivery Address" 
                    placeholder="Enter street address" 
                    variant="bordered"
                    value={addressInfo.address}
                    onValueChange={(val) => setAddressInfo(prev => ({...prev, address: val}))}
                  />
                  <div className="flex gap-2">
                    <Input 
                      label="City" 
                      placeholder="City" 
                      variant="bordered"
                      value={addressInfo.city}
                      onValueChange={(val) => setAddressInfo(prev => ({...prev, city: val}))}
                    />
                    <Input 
                      label="State" 
                      placeholder="State" 
                      variant="bordered"
                      value={addressInfo.state}
                      onValueChange={(val) => setAddressInfo(prev => ({...prev, state: val}))}
                    />
                  </div>
                  <Checkbox 
                    color="success" 
                    isSelected={addressInfo.saveAddress}
                    onValueChange={(val) => setAddressInfo(prev => ({...prev, saveAddress: val}))}
                  >
                    Save address for future orders
                  </Checkbox>
                </div>
              )}
            </div>
          </Card>

          <Card className="p-4" shadow="sm">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <span className="text-[16px]">Subtotal ({totalItems} Items)</span>
              <span className="font-bold">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="">Delivery</span>
              <span className={`font-bold ${deliveryFee === 0 ? 'text-green-600' : ''}`}>
                {deliveryFee === 0 ? "FREE" : `₦${deliveryFee.toLocaleString()}`}
              </span>
            </div>
            <Divider className="my-4" />
            <div className="flex justify-between mb-6 items-center">
              <span className="text-xl font-bold">Total</span>
              <div className="text-right">
                <span className="text-xl font-bold text-[34px] text-green-600 block leading-tight">
                  ${grandTotal.toFixed(2)}
                </span>
                {deliveryFee > 0 && <span className="text-xs text-gray-400 font-normal">Includes ₦1,500 delivery fee</span>}
              </div>
            </div>
            <Button 
              color="success" 
              className="w-full text-white font-bold h-12" 
              size="lg"
              onPress={handleCheckout}
              isLoading={isProcessing}
            >
              {isProcessing ? "Processing..." : "Proceed to Checkout"}
            </Button>
            <Button as={Link} to="/categories" variant="light" color="success" className="w-full mt-2">
              Continue Shopping
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}