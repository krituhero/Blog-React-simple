import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci';
import { IoSunny } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
import { FaBlog } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header fixed top-0 left-0 w-full z-50 h-24 pt-6 gap-8 flex  justify-center bg-gray-100">
      <div className="logo pl-8 ml-8 mr-8 pr-4 pt-2">
        <FaBlog />
      </div>
      <div className="header_middle flex flex-1 justify-between px-16 mx-8 pt-2">
        <div className="home"><Link to="/">Home</Link></div>
        <div className="blog"><Link to="blogs">Blog</Link></div>
        <div className="singlePost"><Link to='/blog/:id'>Single Post</Link></div>
        <div className="pages"><Link to='/'> Pages</Link></div>
        <div className="contact"> <Link to=''> Contact </Link></div>
      </div>
      <div className="right flex justify-center ml-8 pl-4 mr-8 gap-4">
        <div className='search w-auto relative'>
          <input type="text" placeholder='Search' className='bg-gray-100 h-10 pl-4 px-2 py-1 rounded relative focus:outline-none' />
          <CiSearch className="text-gray-600 text-2xl cursor-pointer absolute right-3 top-2" />
        </div>
        <div className='bg-zinc-100 rounded-xl h-10 flex items-center overflow-auto px-2 py-0'>
          <button className='toggle bg-transparent hover:bg-zinc-200 rounded-sm px-2 py-2 '>
            <IoSunny />
          </button>
          <button className='toggle bg-transparent hover:bg-zinc-200 rounded-sm px-2 py-2 '>
            <IoMdMoon />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header