import React, { useContext } from 'react'
import './FoodDisplay.css'
import {StoreContext} from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({categoria}) => {

    const { food_list } = useContext(StoreContext)

  return (
    <div className='food-display' id='food-dispaly'>
      <h2>Melhores pratos perto de você</h2>
      <div className="food-display-list">
        {food_list.map((item, index) =>{
          {console.log(categoria, item.category)}
          if(categoria==="All" || categoria===item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
