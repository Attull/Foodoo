import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import CategoryMenu from './components/CategoryMenu'
import FoodItems from './components/FoodItems'

function App() {


  return (
    <>
      <Navbar/>
      <CategoryMenu/>
      <FoodItems/>
    </>
  )
}

export default App
