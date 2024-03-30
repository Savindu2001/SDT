import React from 'react'
import MenuLinks from '../MenuLinks/MenuLinks'

function Links()  {
  return (
    <>
    <ul className='flex gap-8 mr-16 text-[18px]'>
    <li className='border-b-2 cursor-pointer hover:text-blue-500 transit border-emerald-800 hover:border-blue-500'><MenuLinks linkname='Home' url='/' /></li>
    <li className='border-b-2 cursor-pointer hover:text-blue-500 transit border-emerald-800 hover:border-blue-500'><MenuLinks linkname='About us' url='/About' /></li>
    <li className='border-b-2 cursor-pointer hover:text-blue-500 transit border-emerald-800 hover:border-blue-500'><MenuLinks linkname='Contact' url='/Contact' /></li>
    <li className='border-b-2 cursor-pointer hover:text-blue-500 transit border-emerald-800 hover:border-blue-500'><MenuLinks linkname='Hostels' url='/Hostels' /></li>
    <li className='border-b-2 cursor-pointer hover:text-blue-500 transit border-emerald-800 hover:border-blue-500'><MenuLinks linkname='Price' url='/Price' /></li>
    <li className='border-b-2 cursor-pointer hover:text-blue-500 transit border-emerald-800 hover:border-blue-500'><MenuLinks linkname='Contact us' url='/Contact' /></li>
    </ul>
    
    </>
  )
}

export default Links