import { Input } from "@heroui/react";
import { NavLink } from "react-router-dom";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { useState } from "react";

export default function AppNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Farms", path: "/farms" },
    { name: "Orders", path: "/orders" },
  ];

  return (
    <nav className="w-full h-16 bg-[#4CAF50] relative text-white flex items-center justify-between px-4 z-50">
      <div className="flex items-center gap-2 text-lg font-bold">
        <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

        <img src="/logo.png" alt="Logo" className="h-12 md:h-14 inline-block mr-2 object-contain" />
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
          <NavLink to="/auth/login" className="py-2" onClick={() => setIsMenuOpen(false)}>Login</NavLink>
          <NavLink to="/auth/signup" className="py-2 bg-white text-[#4CAF50] text-center rounded-lg font-bold" onClick={() => setIsMenuOpen(false)}>Sign up</NavLink>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {
          menuItems.map((item, index) => (
            <NavLink key={index} to={item.path} className={({isActive}) => `hover:text-yellow-100 transition-colors ${isActive ? 'active' : ''}`}>{item.name}</NavLink>
          ))
        }
            <NavLink to="auth/login" className="hover:text-yellow-100">Login</NavLink>
      </div>
      <div className="flex gap-2 md:gap-4 items-center">
        <a href="/orders" className="hover:text-gray-200 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /> </svg> </a>
        <a href="/orders" className="hover:text-gray-200 p-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /> </svg> </a>
        <NavLink to="/auth/signup" className="hidden sm:block px-4 py-1 bg-white text-[#4CAF50] rounded-lg font-bold hover:bg-gray-100 transition-colors">Sign up</NavLink>
      </div>
    </nav>
  );
}

export function searchIcon(){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

  )
}
