import './card.css'
import {Link} from 'react-router-dom'

/* const {addToCart} = useCart()


const handleAddToCart= () => {
    addToCart(food)


}
 */
export default function Card({foods}) {
    return (
        <ul className='Card'>
            {
                foods.map(food => 
                <li key = {food.id}>
                    <Link to={`food/${food.id}`}>
                        <img className='foodImg'
                        src={`/food/${food.imageUrl}`}
                        alt={food.name} />
                    </Link>
                    <div className='foodContent'>
                        <h1 className= 'foodName'>{food.name}</h1>
                        <div className= 'foodDescription'>{food.description}</div>
                        <div id="priceandbtn">
                            <h3 className='foodPrice' style={{fontSize: "20px"}}>${food.price}</h3>
                            <button className="cartBtn" >Add to Cart</button>
                        </div>
                        
                    </div>
                </li>
                 
                
                
                )
            }
            

        </ul>
    )
}