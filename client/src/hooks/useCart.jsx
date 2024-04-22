import React, { createContext, useContext, useState } from "react";
import {food} from '../data'
const CartContext = createContext(null)

export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState(food.slice(1,12).map(food => ({food, quantity: 1, price:food.price})));
    const[totalPrice, setTotalPrice] = useState(40);
    const [totalCount, setTotalCount] = useState(3)

    return <CartContext.Provider value={{cart:{items:cartItems, totalPrice, totalCount}}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)