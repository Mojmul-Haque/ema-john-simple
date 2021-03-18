import React, { useEffect, useState } from 'react'
import fakeData from '../../fakeData'
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager'
import Cart from '../Cart/Cart'
import CartReview from '../CartProductReview/CartReview';
import happyImg from '../../images/giphy.gif';
import { useHistory } from 'react-router-dom';

const OrderReview = () => {
  const [cart, setCart] = useState([])
  const [placeOrder, setPlaceOrder] = useState(false)
const history = useHistory()


  const handleRemoveProduct = (productKey) => {
    const newCart = cart.filter(pd => pd.key !== productKey);
    // console.log(newCart, 'newCart')

    setCart(newCart)
     removeFromDatabaseCart(productKey)
  }

  // place order handeler
  const handleProuceedChekout=() =>{
history.push('/shipment')
  }

let thankYou;
if(placeOrder === true){
 thankYou= <img src={happyImg} alt={happyImg}/>
}



useEffect(()=>{
const savedCart = getDatabaseCart();
const productKey = Object.keys(savedCart)
// console.log(productKey);
const cartProduct = productKey.map(key =>{
  const product = fakeData.find( pd => pd.key === key )
  product.quantity =  savedCart[key]
  console.log(product,'getProduct')
  return product;
})
setCart(cartProduct)

},[])
// console.log(cart,'cartorderreveiw')

  return (
    <div className="shop-container">
      <div className="products-container">
      {cart.map(pd => (
        <CartReview
          product={pd}
          key={pd.key}
          handleRemoveProduct={handleRemoveProduct}
        ></CartReview>
      ))}
      {thankYou}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
        <button onClick={handleProuceedChekout}>CheckOut</button>
      </div>
    </div>
  )
}

export default OrderReview
