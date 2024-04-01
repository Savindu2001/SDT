import React from 'react'
import Navbar from '../components/HeaderPanel/NavBar';
import Hero1 from '../components/Hero/Hero1';
import CatergoryRow from '../components/Catergory/CatergoryRow';
import SectionTitle from '../components/Titles/sectionTitle';

function Home() {
  return (
    <>
    <Navbar />
    <Hero1 />
    <CatergoryRow/>
    <SectionTitle/>
    
    </>
  )
}

export default Home