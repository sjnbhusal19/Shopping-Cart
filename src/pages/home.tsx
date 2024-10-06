import React from 'react'
import NavBar from '../components/navbar'
import Product from '../components/product'
import Shorting from '../components/shorting'

const Home = () => {
  return (
    <div >
    <NavBar />    
    <Shorting />
   <Product />

    </div>
  )
}

export default Home