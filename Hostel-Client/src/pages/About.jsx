import React from 'react'
import Navbar from '../components/HeaderPanel/NavBar';
import Footer from '../components/FooterPanel/Footer';
import BodyContent from '../components/Bodycontent/BodyContent';

function About() {
  return (
    <>
    <Navbar />
    <BodyContent>
        <br/>
      <h1>About Page</h1>
      <br/>
    </BodyContent>
    <br/>
    <br/>
    <Footer />
    </>
  )
}

export default About