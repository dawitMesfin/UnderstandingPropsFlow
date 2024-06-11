import React from 'react';

interface CartProps {
  allProducts: string[],
  onClear : (product: string) => void

}

const Cart = ({ allProducts ,onClear}: CartProps) => {
  return (
    <>
    <ul>
    {allProducts.map(product => <li style = {{margin : '10px'}}key = {product}>{product} <button style = {{background: 'red'}} onClick = {() => onClear(product)}>Clear Item</button></li>)}
    </ul>
    </>
  );
};

export default Cart;
