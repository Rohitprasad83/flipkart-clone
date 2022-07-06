import React from 'react'
import 'styles/card.css'
export function Card({ product }) {
  const { title, brand, price, oldPrice, discount, size, img } = product
  return (
    <div className="card flex-col">
      <img src={img} alt="mens Jeans" />
      <p className="bold">{title}</p>
      <p>{brand}</p>
      <div className="flex-row gap-1">
        <span>₹{price}</span>
        <span className="old-price">₹{oldPrice}</span>
        <span>{discount}% off</span>
      </div>
      <p>Size {size.join(', ')}</p>
      <div className="flex-row gap-1 center">
        <button>Add to Wishlist</button>
        <button>Add to Cart</button>
      </div>
    </div>
  )
}
