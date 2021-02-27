import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';



const Product = (props) => {
    console.log(props.handleProduct)
    const {img, name, seller,price, stock, star,features}= props.product
    return (
        <div className="product">
          <div className="product-img">
              <img src={img} alt={img}/>
          </div>
          <div className="product-text">
              <div className="text-top">
                    <h3>{name}</h3>
                    <span>by {seller}</span>
              </div>
              <div className="text-bottom">
                  <div className="left-text">
                        <h5>{price}</h5>
                        <h5>only {stock} left in stock - order soon</h5>
                        <button onClick ={()=>props.handleProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} />   Add to Cart</button>
                        
                  </div>
                  <div className="right-text">
                        <h4>{star}</h4>
                        <h3>Features</h3>
                        <ul>
                            {features.map(discript => <li>{discript.description}: <span>{discript.value}</span></li>)}
                        </ul>
                  </div>
              </div>
          </div>
        </div>
    );
};

export default Product;