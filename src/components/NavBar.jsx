import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RiFootprintFill } from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { login, logout } from "../api/firebase";

export default function NavBar() {
  const [user, setUser] = useState();
  const handleLogin = () => {
    login().then(setUser);
  };
  const handleLogout = () => {
    logout().then(setUser);
  };
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <RiFootprintFill />
        <h1>STEPIE</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">Carts</Link>
        <Link to="/products/new" className="text-2xl">
          <HiOutlinePencilSquare />
        </Link>
        {!user && <button onClick={handleLogin}>Login</button>}
        {user && <button onClick={handleLogout}>Logout</button>}
      </nav>
    </header>
  );
}
