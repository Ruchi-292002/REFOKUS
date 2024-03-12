import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Productss'
import Productss from './components/Productss'
import Marques from './components/Marques'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-full  bg-zinc-900 text-white'>

    <Navbar/>
    <Work/>
    <Stripes/>
    <Productss/>
    <Marques/>
    <Cards/>
    <Footer/>
   
      
    </div>
  )
}

export default App
