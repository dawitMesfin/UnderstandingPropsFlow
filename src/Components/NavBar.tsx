import React from 'react';

interface NavBarProps {
  numberOfProductItems : number
}

const NavBar = ({numberOfProductItems} : NavBarProps) => {

  const circularSpanStyle: React.CSSProperties= {
    display: 'inline-block',
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#3498db',
    textAlign: 'center',
    lineHeight: '50px',
    color: 'white',
    fontSize: '16px',
  };
  
  return (
    <div>
      <h1>You have <span style={circularSpanStyle}>{numberOfProductItems}</span> items in the cart</h1>
    </div>
  );
};

export default NavBar;
