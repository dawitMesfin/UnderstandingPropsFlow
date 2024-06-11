import React from 'react';

interface NavBarProps {
  numberOfProductItems : number
}

const NavBar = ({numberOfProductItems} : NavBarProps) => {
  return (
    <div>
      <h1>You have {numberOfProductItems} in the cart</h1>
    </div>
  );
};

export default NavBar;
