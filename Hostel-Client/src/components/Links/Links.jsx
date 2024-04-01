import React from 'react'
import MenuLinks from '../MenuLinks/MenuLinks'

function Links()  {
  return (
    <>
    <ul className='flex gap-8 mr-16 text-[18px]'>
    <li className='border-b-2 border-white cursor-pointer hover:text-green-600 transit hover:border-green-600'><MenuLinks linkname='Home' url='/' /></li>
    <li className='border-b-2 border-white cursor-pointer hover:text-green-600 transit hover:border-green-600'><MenuLinks linkname='About us' url='/About' /></li>
    <li className='border-b-2 border-white cursor-pointer hover:text-green-600 transit hover:border-green-600'><MenuLinks linkname='Contact' url='/Contact' /></li>
    <li className='border-b-2 border-white cursor-pointer hover:text-green-600 transit hover:border-green-600'><MenuLinks linkname='Hostels' url='/Hostels' /></li>
    <li className='border-b-2 border-white cursor-pointer hover:text-green-600 transit hover:border-green-600'><MenuLinks linkname='Price' url='/Price' /></li>
    <li className='border-b-2 border-white cursor-pointer hover:text-green-600 transit hover:border-green-600'><MenuLinks linkname='Contact us' url='/Contact' /></li>
    </ul>
    
    </>
  )
}

export default Links