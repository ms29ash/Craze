import React from 'react'
import { FaShoppingCart } from "react-icons/fa"
import { BsPerson, BsHeart } from "react-icons/bs"
import { IoSearch } from 'react-icons/io5'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiShoppingBag } from 'react-icons/fi'

function Navbar() {
    const class_Link = ""
    return (
        <header className="w-screen bg-white h-20 drop-shadow-xl grid place-items-center " >
            <div className="w-11/12 flex items-center" >

                <h1 className="text-2xl font-bold" >Navbar</h1>
                <div className="flex ml-16 space-x-10 font-semibold text-md" >
                    <a href="/" className={class_Link} >Men</a>
                    <a href="/" className={class_Link} >Women</a>
                    <a href="/" className={class_Link} >Children</a>
                    <a href="/" className={class_Link} >Toys</a>
                    <a href="/" className={class_Link} >Shoes</a>
                </div>
                <div className="flex grow justify-end items-center space-x-8 text-2xl ">
                    <div className="flex items-center bg-gray-100 px-3  rounded-3xl py-2" >
                        <input placeholder="Search.." type="text" className="bg-gray-100  px-4 text-sm outline-none border-none " />

                        <IoSearch />
                    </div>
                    <a href="/" className="flex flex-col items-center" ><FiShoppingBag /> <p className="text-xs font-medium" >Bag</p> </a>
                    <a href="/" className="flex flex-col items-center" ><AiOutlineHeart /> <p className="text-xs font-medium" >Wishlist</p> </a>
                    <a href="/" className="flex flex-col items-center" ><BsPerson /> <p className="text-xs font-medium" >Profile</p> </a>
                </div>
            </div>
        </header>
    )
}

export default Navbar