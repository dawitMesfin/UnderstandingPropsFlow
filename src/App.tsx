import { useState } from 'react'

import './App.css'
import NavBar from './Components/NavBar'
import Cart from './Components/Cart'

function App() {
  const [productItetms, setProductItems] = useState(['Tv' , 'Radio', 'phone', 'satelite finder'])

  const onClear = (product: string) => {
      setProductItems(productItetms.filter(item => item !== product))
  }

  return (
    <>
     <NavBar numberOfProductItems = {productItetms.length}/>
     <Cart allProducts = {productItetms} onClear = {onClear}/>
    </>
  )
}

export default App
