import React from 'react'
import './Offers.css'
import Exclusive_image from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className='Offers'>
      <div className="offers-left">
<h1>Exclusive</h1>
<h1>Offers for you</h1>
<p>Only on best sellers and products</p>
<button>Check now</button>
      </div>
      <div className="offers-right">
<img src={Exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
