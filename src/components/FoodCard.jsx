import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

const FoodCard = (props) => {

  const dispatch = useDispatch()
    return (
        <div className="food-card">
        <img src={props.img} alt={props.name} />
        <div className="content">
          <h2 className="name">{props.name}</h2>
          <p className="desc">{props.desc.slice(0,60)}...</p>
          <div className="footer">
            <span className="price">${props.price}</span>
            <span className="rating">Rating: {props.rating} ⭐</span>
          </div>
          <button className='cart-btn' onClick={()=> dispatch(addToCart())}>Add to cart</button>
        </div>
      </div>
    )
}

export default FoodCard