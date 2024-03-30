import React from 'react'
import Navbar from '../components/HeaderPanel/NavBar';
import Footer from '../components/FooterPanel/Footer';
import BodyContent from '../components/Bodycontent/BodyContent';

function Home() {
  return (
    <>
    <Navbar />
    <BodyContent>
      <h1 className='text-4xl'>Home Page</h1>
      <p>Hostel,Apartment,Room,Shared House,House</p>
    </BodyContent>
    <br/>
    <Footer />
    </>
  )
}

export default Home