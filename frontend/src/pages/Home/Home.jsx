import React, { useState } from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import ExplorarMenu from '../../components/ExplorarMenu/ExplorarMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import BaixarApp from '../../components/BaixarApp/BaixarApp'

const Home = () => {

    const[categoria, setCategoria] = useState("All");

  return (
    <div>
      <Header/>
      <ExplorarMenu categoria={categoria} setCategoria={setCategoria}/>
      <FoodDisplay categoria = {categoria}/>
      <BaixarApp/>
    </div>
  )
}

export default Home
