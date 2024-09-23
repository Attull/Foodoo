import React from 'react'
import ItemsCart from './ItemsCart'

const AddtoCart = (props) => {

  const {setShowCart} = props
  return (
    <div className='cart-container'>
        <div className='cart-header'>
            <h1>My Order</h1>
            <i class="fa-regular fa-circle-xmark" onClick={()=> setShowCart(false)}></i>
        </div>
        <div className='cart-body'>
            <ItemsCart />
            <ItemsCart/>
        </div>
        <div class="cart-footer">
            <h3>Items : 2</h3>
            <h3>Total Amout : 320</h3>
            <hr/>
            <button className='checkout-btn'>Checkout</button>
        </div>
    </div>
  )
}

export default AddtoCart