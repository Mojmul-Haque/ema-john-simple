import React from 'react'

const CartReview = props => {
  const { name, quantity, img, key, price } = props.product
  return (
    <>
      <div style={{ borderBottom: '1px solid gray' }}>
        <img src={img} alt={img} />
        <h3>{name}</h3>
        <h3>Quantity: {quantity}</h3>
        <h3>price: {price}</h3>
        <br />
        <button onClick={() => props.handleRemoveProduct(key)}>Remove</button>
      </div>
    </>
  )
}

export default CartReview
