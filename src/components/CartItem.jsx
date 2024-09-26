import React from 'react'

const CartItem = ({ img, name, price, rating, quantity }) => {
    return (
        <div className="food-item">
            <img src={img} alt={name} className="food-image" />
            <div className="food-info">
                <h2 className="food-name">{name}</h2>
                <p className="food-price">${price.toFixed(2)}</p>
                <div className="food-rating">
                    <span>Rating: {rating}</span>
                </div>
                <div className="food-quantity">
                    <span>Quantity: {quantity}</span>
                </div>
            </div>
        </div>
    )
}

export default  CartItem