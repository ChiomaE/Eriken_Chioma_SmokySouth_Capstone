import React from 'react'
import './cart.css'
import { useCart } from '../../hooks/useCart'

export default function Cart() {
    const{cart} =useCart()
    return (
        <div>{cart.items.length}</div>
    )
}