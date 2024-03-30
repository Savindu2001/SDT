import React from 'react'
import MenuLinks from '../MenuLinks/MenuLinks'

function Links() {
  return (
    <>
    <MenuLinks linkname='Home' url='/' />
    <MenuLinks linkname='About us' url='/About' />
    <MenuLinks linkname='Contact' url='/Contact' />
    <MenuLinks linkname='Hostels' url='/Hostels' />
    <MenuLinks linkname='Price' url='/Price' />
    <MenuLinks linkname='Contact us' url='/Contact' />
    </>
  )
}

export default Links