import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart, 'cart')
    const newCart = props.cart

let total = 0;
    for(let i = 0; i<newCart.length; i++ ){
    total = total+ newCart[i].price
    }



let shiping = 0;
    if(total > 50){
        shiping = 0;
    }

    else if(total > 25){
        shiping = 8;
    }

    else if(total > 0){
        shiping = 10
    }

let tax = total/10

const formatNumber =(num) =>{
        let fixed = num.toFixed(2)
        return Number(fixed)
    }

const grandTotal = total + shiping+tax

    return (
        <div>
            <h2>Orders Summery</h2>
            <h3><small>Item Ordered: {newCart.length}</small></h3>
            <h3>Product Price: {total} </h3>
            <p>Shiping: {formatNumber(shiping)} </p>
            <p>Total Before Tax: {formatNumber(total+shiping)} </p>
            <p>Tax: {formatNumber(tax)} </p>
            <br></br>
            <hr></hr>
            <p>Total = {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;