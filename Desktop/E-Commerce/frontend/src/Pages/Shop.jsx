import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollection/NewCollections'
import NewFolder from '../Components/NewFolder/NewFolder'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewFolder/>
      
      
    </div>
  )
}

export default Shop
