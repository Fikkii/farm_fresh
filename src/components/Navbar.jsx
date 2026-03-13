import { Input } from "@heroui/react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full h-16 bg-[#4CAF50] text-white flex items-center justify-between px-4">
      <div className="text-lg font-bold">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 inline-block mr-2" />
      </div>
      <div className="flex gap-4">
      <Input
          classNames="p-[10px] rounded-lg w-[500px]"
          placeholder="Type to search..."
          type="search"
        />
      </div>
      <div className="flex gap-4">
        <NavLink to="/" className="hover:text-gray-400">Home </NavLink>
        <NavLink to="/categories" className="hover:text-gray-400">Categories</NavLink>
        <NavLink to="/farms" className="hover:text-gray-400">Farms</NavLink>
        <NavLink to="/orders" className="hover:text-gray-400">Orders</NavLink>
      </div>
      <div className="flex gap-4">
        <a href="/orders" className="hover:text-gray-400">Orders</a>
      </div>
    </nav>
  );
}
