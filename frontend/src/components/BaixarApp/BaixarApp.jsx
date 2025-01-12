import React from 'react'
import './BaixarApp.css'

const BaixarApp = () => {
  return (
    <div className='baixar-app' id='baixar-app'>
      <p >Para uma melhor Experiência, faça o Download<br />Tomato App</p>

      <div className="baixar-app-plataformas">
        <img src={assets.play_store} />
        <img src={assets.app_store} />
      </div>
    </div>
  )
}
import './BaixarApp.css'
import { assets } from '../../assets/assets'

export default BaixarApp
