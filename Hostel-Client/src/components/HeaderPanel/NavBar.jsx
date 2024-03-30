import React, { useState } from 'react'
import Links from '../Links/Links';
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
  const [click,setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  }
  const logoName = 'GreenUniHomes';
  const content = <>
  <div className='absolute left-0 right-0 block w-full transition bg-blue-500 lg:hidden top-16'>
    
      <ul className='p-20 text-xl text-center'>
        <Link spy={true} smooth={true} to="/">
        <li className='py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Home</li>
        </Link>
        <Link spy={true} smooth={true} to="/About">
        <li className='py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>About</li>
        </Link>
        <Link spy={true} smooth={true} to="/Hostel">
        <li className='py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Hostel</li>
        </Link>
        <Link spy={true} smooth={true} to="/Contact">
        <li className='py-4 my-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>Contact</li>
        </Link>
      </ul>
    
  </div>
  </>
  return(
    <nav className='bg-emerald-800'>
      <div className='z-50 flex justify-between flex-1 px-20 py-4 text-white h-10vh lg:py-5'>
        <div className='flex items-center flex-1'>
          <span className='text-3xl font-bold'>{logoName}</span>
        </div>
        <div className='items-center justify-end hidden font-normal flex-2 lg:flex md:flex lg:'>
          <div className='flex-10'>
            <Links spy={true} smooth={true} />
          </div>
        </div>
        <div>
        {click && content}
        </div>
        <button className='block transition sm:hidden' onClick={handleClick}>
          {click ? <FaTimes size={30} /> : <CiMenuFries size={30}/>}
        </button>
      </div>
    </nav>
  );

};


export default Navbar