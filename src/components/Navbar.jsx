import { Input } from "@heroui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-[#4CAF50] text-white flex items-center justify-between px-4">
      <div className="text-lg font-bold">
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
          startContent={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg> }
        />
      </div>
      <div className="flex items-center gap-4">
        <NavLink to="/" className="hover:text-gray-400">Home </NavLink>
        <NavLink to="/categories" className="hover:text-gray-400">Categories</NavLink>
        <NavLink to="/farms" className="hover:text-gray-400">Farms</NavLink>
        <NavLink to="/orders" className="hover:text-gray-400">Orders</NavLink>
      </div>
      <div className="flex gap-4">
        <a href="/orders" className="hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /> </svg> </a>
        <a href="/orders" className="hover:text-gray-400"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /> </svg> </a>
        <a href="/orders" className="hover:text-gray-400">Sign up</a>
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
