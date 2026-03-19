import { Input, Badge, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Divider, Image, Avatar, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useCart } from "../contexts/cartContext";
import { useUser } from "../contexts/userContext";
import { useState } from "react";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart, totalItems, totalPrice, removeFromCart, updateQuantity } = useCart();
  const { user, logout } = useUser();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Farms", path: "/farms" },
    { name: "Cart", path: "/orders" },
  ];

  const handleCheckout = (onClose) => {
    onClose();
    navigate("/orders");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
    setIsMenuOpen(false);
  };

  const userInitial = user?.name ? user.name.charAt(0).toUpperCase() : user?.email?.charAt(0).toUpperCase() || "?";

  return (
    <nav className="w-full h-16 bg-[#4CAF50] relative text-white flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-2 text-lg font-bold">
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <Link to="/">
          <img src="/logo.png" alt="Logo" className="h-12 md:h-14 inline-block mr-2 object-contain" />
        </Link>
      </div>
      <div className="flex-1 max-w-md mx-4 hidden md:block">
      <Input
          classNames={{
            input: [
              "bg-[#4CAF50]",
              "text-white",
              "placeholder:text-gray-200"
            ],
            innerWrapper: "bg-[#4CAF50]",
            inputWrapper: [
              "bg-[#4CAF50]",
              "border-white/40",
              "hover:border-white",
              "group-data-[focus=true]:border-white",
            ]
          }}
          placeholder="Type to search..."
          type="search"
          variant="bordered"
          startContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-gray-200">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg> }
        />
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)}></div>
      )}

      {/* Mobile Menu Content */}
      <div className={`fixed top-0 left-0 h-full w-[70%] max-w-xs bg-[#4CAF50] p-6 gap-4 z-50 flex flex-col transform transition-transform duration-300 ease-in-out md:hidden ${ !isMenuOpen ? "-translate-x-full" : "translate-x-0" }`} >
        <div className="flex justify-between items-center mb-4">
          <img src="/logo.png" alt="Logo" className="h-10" />
          <button onClick={() => setIsMenuOpen(false)} className="p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {
          menuItems.map((item, index) => (
            <NavLink onClick={() => setIsMenuOpen(false)} key={index} to={item.path} className={({isActive}) => `text-lg py-2 hover:text-yellow-100 ${isActive ? 'font-bold underline' : ''}`}>{item.name}</NavLink>
          ))
        }
        <div className="mt-auto border-t border-white/20 pt-4 flex flex-col gap-4">
          {user ? (
            <>
              <NavLink to="/profile" className="py-2" onClick={() => setIsMenuOpen(false)}>Profile</NavLink>
              <NavLink to="/order-history" className="py-2" onClick={() => setIsMenuOpen(false)}>Order History</NavLink>
              <button onClick={handleLogout} className="py-2 text-left">Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/auth/login" className="py-2" onClick={() => setIsMenuOpen(false)}>Login</NavLink>
              <NavLink to="/auth/signup" className="py-2 bg-white text-[#4CAF50] text-center rounded-lg font-bold" onClick={() => setIsMenuOpen(false)}>Sign up</NavLink>
            </>
          )}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {
          menuItems.map((item, index) => (
            <NavLink key={index} to={item.path} className={({isActive}) => `hover:text-yellow-100 transition-colors ${isActive ? 'active' : ''}`}>{item.name}</NavLink>
          ))
        }
        {!user && (
          <NavLink to="/auth/login" className="hover:text-yellow-100">Login</NavLink>
        )}
      </div>
      <div className="flex gap-2 md:gap-4 items-center">
        <Badge content={totalItems} color="danger" isInvisible={totalItems === 0} shape="circle" size="sm">
          <Button 
            isIconOnly 
            variant="light" 
            className="text-white p-1 min-w-fit h-fit"
            onPress={onOpen}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"> 
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /> 
            </svg> 
          </Button>
        </Badge>
        
        {user ? (
          <>
            <Link to="/order-history" className="hover:text-gray-200 p-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /> 
              </svg> 
            </Link>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform"
                  color="success"
                  name={userInitial}
                  size="sm"
                  getInitials={(name) => name}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">{user.email}</p>
                </DropdownItem>
                <DropdownItem key="my-profile" onPress={() => navigate("/profile")}>
                  My Profile
                </DropdownItem>
                <DropdownItem key="orders" onPress={() => navigate("/order-history")}>
                  My Orders
                </DropdownItem>
                <DropdownItem key="logout" color="danger" onPress={handleLogout}>
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </>
        ) : (
          <NavLink to="/auth/signup" className="hidden sm:block px-4 py-1 bg-white text-[#4CAF50] rounded-lg font-bold hover:bg-gray-100 transition-colors">Sign up</NavLink>
        )}
      </div>

      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        scrollBehavior="inside"
        size="md"
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Shopping Cart ({totalItems} items)</ModalHeader>
              <ModalBody>
                {cart.length === 0 ? (
                  <div className="py-8 text-center text-gray-500">
                    Your cart is empty
                  </div>
                ) : (
                  <div className="flex flex-col gap-4">
                    {cart.map((item) => (
                      <div key={item.$id} className="flex gap-4 items-center">
                        <Image
                          src={item.img}
                          alt={item.productName}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-sm">{item.productName}</h4>
                          <p className="text-xs text-gray-500">${item.price} / kg</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Button size="sm" isIconOnly variant="flat" onPress={() => updateQuantity(item.$id, (item.quantity || 1) - 1)}>-</Button>
                            <span className="text-xs font-bold">{item.quantity || 1}</span>
                            <Button size="sm" isIconOnly variant="flat" onPress={() => updateQuantity(item.$id, (item.quantity || 1) + 1)}>+</Button>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold text-sm">${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}</p>
                          <Button 
                            size="sm" 
                            color="danger" 
                            variant="light" 
                            isIconOnly
                            onPress={() => removeFromCart(item.$id)}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                            </svg>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </ModalBody>
              <ModalFooter className="flex-col items-stretch gap-3">
                <Divider />
                <div className="flex justify-between items-center px-1">
                  <span className="font-bold">Total:</span>
                  <span className="font-bold text-xl text-[#4CAF50]">${totalPrice.toFixed(2)}</span>
                </div>
                <Button 
                  color="success" 
                  className="w-full text-white font-bold"
                  isDisabled={cart.length === 0}
                  onPress={() => handleCheckout(onClose)}
                >
                  Proceed to Checkout
                </Button>
                <Button variant="light" color="danger" className="w-full" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </nav>
  );
}
