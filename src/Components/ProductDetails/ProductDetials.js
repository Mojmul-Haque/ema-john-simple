import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetials = () => {
  let {productKey}= useParams()

  const product=  fakeData.find(pd=> pd.key === productKey)
//   console.log(product)
    
    return (
        <div>
            <h3>Product Details coming sooooooooooooooooooon</h3>
            <Product showCartButton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetials;