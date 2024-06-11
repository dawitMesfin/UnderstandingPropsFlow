import React from 'react';

interface CartProps {
  allProducts: string[],
  onClear : (product: string) => void

}

const Cart = ({ allProducts ,onClear}: CartProps) => {

  const liStyle = {
    backgroundColor: '#f0f8ff',
    display : 'flex',
    justifyContent: 'space-around',
    margin: '10px 0',
    padding: '10px',
    borderRadius: '5px',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
    cursor: 'pointer' // Add cursor style for better UX
  };
  return (
    <>
    <ul style={{listStyle: 'none'}}>
    {allProducts.map(product => <li style = {liStyle} key = {product}>{product}
     <button  onClick = {() => onClear(product)} style={{background : 'red', borderRadius: '20px'}}>Clear Item</button></li>)}
    </ul>
    </>
  );
};

export default Cart;
