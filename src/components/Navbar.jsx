import { Input } from "@heroui/react";
import { NavLink } from "react-router-dom";
import { useUser } from "../contexts/userContext";

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@heroui/react";
import { useState } from "react";

export default function AppNavbar() {
  const { user, login } = useUser();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Categories", path: "/categories" },
    { name: "Farms", path: "/farms" },
    { name: "Orders", path: "/orders" },
  ];

  return (
    <nav className="w-full h-16 bg-[#4CAF50] relative text-white flex items-center justify-between px-4">
      <div className="flex items-center gap-2 text-lg font-bold">
        <svg className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        <img src="/logo.png" alt="Logo" className="h-[70px] inline-block mr-2" />
      </div>
      <div className="flex gap-4">
      <Input
          classNames={{
            input: [
              "bg-[#4CAF50]",
              "w-[463px]"
            ]
          }}
          placeholder="Type to search..."
          type="search"
          className="hidden md:block"
          startContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg> }
        />
      </div>
      <div className={`bg-[#4CAF50] py-[30px] px-[16px] gap-[12px] z-99 flex flex-col w-[50%] absolute translate-y-[100%] bottom-0 left-0 transition-transform duration-300 ${ !isMenuOpen ? "translate-x-[-100%]" : "translate-x-0" }`} >
        {
          menuItems.map((item, index) => (
            <NavLink onClick={() => setIsMenuOpen(!isMenuOpen)} key={index} to={item.path} className="hover:text-yellow-100">{item.name}</NavLink>
          ))
        }
      </div>
      <div className="hidden md:flex items-center gap-4">
        {
          menuItems.map((item, index) => (
            <NavLink key={index} to={item.path} className="hover:text-yellow-100">{item.name}</NavLink>
          ))
        }
            <NavLink to="auth/login" className="hover:text-yellow-100">Login</NavLink>
      </div>
      <div className="flex gap-4 items-center">
        <a href="/orders" className="hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /> </svg> </a>
        <a href="/orders" className="hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /> </svg> </a>
        <NavLink to="/auth/signup" className="hover:text-gray-400">Sign up</NavLink>

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
