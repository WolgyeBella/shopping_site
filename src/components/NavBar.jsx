import React from 'react'
import { Link } from 'react-router-dom'
import { RiFootprintFill } from "react-icons/ri";
import { HiOutlinePencilSquare } from "react-icons/hi2";



export default function NavBar() {
  return (
    <header className='flex justify-between border-b border-gray-300 p-2'>
        <Link to='/' className='flex items-center text-4xl text-brand'>
            <RiFootprintFill />
            <h1>STEPIE</h1>
        </Link>
        <nav className='flex items-center gap-4 font-semibold'>
            <Link to='/products'>Products</Link>
            <Link to='/carts'>Carts</Link>
            <Link to='/products/new' className='text-2xl'>
                <HiOutlinePencilSquare />
            </Link>
            <button>Login</button>
        </nav>
    </header>
  )
}
