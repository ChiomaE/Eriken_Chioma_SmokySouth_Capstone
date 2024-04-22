import './card.css'
import {Link} from 'react-router-dom'

export default function Card({foods}) {
    return (
        <ul className='Card'>
            {
                foods.map(food => 
                <li key = {food.id}>
                    <Link to={`food/${food.id}`}>
                        <img className='img'
                        src={`/food/${food.imageUrl}`}
                        alt={food.name} />
                    </Link>
                </li>
                    
                
                
                )
            }
            

        </ul>
    )
}