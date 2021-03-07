import React, { useEffect, useState } from 'react'
import fakeData from '../../fakeData'
import {
  addToDatabaseCart,
  getDatabaseCart
} from '../../utilities/databaseManager'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'
import { Link } from 'react-router-dom'

const Shop = () => {
  const first10 = fakeData.slice(0, 10)
  const [products, setProducts] = useState(first10)
  const [cart, setCart] = useState([])

  useEffect(() => {
    const savedCart = getDatabaseCart()
    const productKeys = Object.keys(savedCart)
    console.log(savedCart, productKeys)
    const previousCart = productKeys.map(existingKey => {
      const product = fakeData.find(pd => pd.key === existingKey)
      product.quantity = savedCart[existingKey]
      console.log(product, 'product')
      return product
    })
    setCart(previousCart)
    console.log(cart)
  }, [])

  const handleProduct = product => {
    const sameProduct = cart.find(pd => pd.key === product.key)

    let count = 1
    let newCart
    if (sameProduct) {
      count = sameProduct.quantity + 1
      sameProduct.quantity = sameProduct.quantity + 1

      const others = cart.filter(pd => pd.key !== product.key)
      newCart = [...others, sameProduct]
      setCart(newCart)
    } else {
      product.quantity = 1
      newCart = [...cart, product]
      setCart(newCart)
    }

    addToDatabaseCart(product.key, count)
  }

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {products.map(pd => (
          <Product
            product={pd}
            handleProduct={handleProduct}
            showCartButton={true}
            key={pd.key}
          ></Product>
        ))}
      </div>
      <div className='cart-container'>
        <Cart cart={cart}>
          <Link to='/review-order'>
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  )
}

export default Shop
