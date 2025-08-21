import React, { useContext, useState } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {
  const {food_list} = useContext(StoreContext);
  const [searchTerm, setSearchTerm] = useState('')

  // Filter the food list by category and search term
  const filteredFoods = food_list.filter((item) => {
    const matchCategory = category === "All" || category === item.category
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <input
        type="text"
        placeholder="Search food..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{
          margin: '16px 0',
          padding: '8px',
          width: '100%',
          maxWidth: '400px',
          display: 'block'
        }}
      />
      <div className='food-display-list'>
        {filteredFoods.length === 0 && <p>No food found.</p>}
        {filteredFoods.map((item) => (
          <FoodItem
            key={item._id}
            image={item.image}
            name={item.name}
            desc={item.description}
            price={item.price}
            id={item._id}
          />
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay
