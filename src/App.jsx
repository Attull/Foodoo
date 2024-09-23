import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import CategoryMenu from './components/CategoryMenu'
import FoodItems from './components/FoodItems'
import AddtoCart from './components/AddtoCart'

function App() {

  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <Navbar/>
      <CategoryMenu/>
      <FoodItems/>
      {
        (showCart) ?   <AddtoCart setShowCart={setShowCart}/> :  <i className="fa-solid fa-cart-shopping" onClick={()=> setShowCart(true)}></i>
      }
    
    </>
  )
}

export default App
