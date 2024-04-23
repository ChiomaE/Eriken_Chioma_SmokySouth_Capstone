import React, { createContext, useContext, useEffect, useState } from "react";
import {food} from '../data'
const CartContext = createContext(null)

export default function CartProvider({children}) {
    const [cartItems, setCartItems] = useState(food.slice(1,12).map(food => ({food, quantity: 1, price:food.price})));
    const[totalPrice, setTotalPrice] = useState(40);
    const [totalCount, setTotalCount] = useState(3)

    useEffect(() => {
        const totalPrice = sum(cartItems.map(item => item.price))
        setTotalPrice(totalPrice)
    }, [cartItems])

    const sum = items => {
        return items.reduce((prevValue, curValue) => prevValue + curValue, 0)
    }

    const removeFromCart = foodId => {
        const filteredCartItems = cartItems.filter(item => item.food.id !== foodId);
        setCartItems(filteredCartItems);
    }

    const addToCart = food => {
        const cartItem = cartItems.find(item => item.food.id === food.id)
        setCartItems(...cartItems, {price: food.price})
    }

    return <CartContext.Provider value={{cart:{items: cartItems, totalPrice, totalCount}, removeFromCart}}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext)