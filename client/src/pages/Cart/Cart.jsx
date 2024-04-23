import React from 'react'
import './cart.css'
import { useCart } from '../../hooks/useCart'
import Title from '../../components/Title/Title'
import {Link} from 'react-router-dom'

export default function Cart() {
    const{cart, removeFromCart} = useCart()
    return (
        <div className='Cart'>
            <Title title="Cart" />

            {cart && cart.items.length > 0 &&
                <div className="container">
                    <ul className='cartList'>
                        {cart.items.map(item => <li key={item.food.id}>
                            <div className='foodInfo'>
                                {item.food.name}
                                {/* Modal for food item */}
                                <div className='priceandbtn'>
                                    ${item.price}
                                    
                                </div>
                                
                                
                            </div>

                            <button className='deleteBtn' onClick={() => removeFromCart(item.food.id)}>Delete</button>
                            
                        </li>)}
                        
                    </ul>

                    <div className='checkout'>
                        <div className='totalPrice'>Total: ${cart.totalPrice}</div>
                        
                        <button>
                            <Link to='/checkout' /* style={{color:'white', textDecoration: 'none' }} */>Checkout</Link>
                        </button>
                    </div>
                    

                </div>
            }

        
        </div>
        
    )
}