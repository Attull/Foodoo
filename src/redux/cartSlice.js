import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"",
    initialState:{
        cart:[]
    },
    reducers:{
       addToCart : (state, action) =>{

       } 
    }
})

export const {addToCart} = CartSlice.actions

export default CartSlice.reducer