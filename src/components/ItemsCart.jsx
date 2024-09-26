import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const ItemsCart = () => {

  const cartItems = useSelector((state)=> state.cart.cart)

  return (
    <div>
      {
        cartItems.map((val)=>{
          return(
            <CartItem 
              img={val.img}
              name={val.name}
              price={val.price}
              rating={val.rating}
              quantity={0}
            
            />
          )
        })
      }
    </div>
  )
}

export default ItemsCart