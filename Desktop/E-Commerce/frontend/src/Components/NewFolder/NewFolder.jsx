import React from 'react'
import './NewFolder.css'
const NewFolder = () => {
  return (
    <div class="newsLetter">
    <h1>Subscribe to Our Newsletter</h1>
    <p>Stay updated with our latest news and offers!</p>
    <div>
      <input type="email" placeholder="Enter your email" required />
      <button type="submit">Subscribe</button>
    </div>
  </div>
  
  )
}

export default NewFolder
