import React from 'react'
import './ExplorarMenu.css'
import { menu_list } from '../../assets/assets'

const ExploreMenu = ({categoria, setCategoria}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore nosso menu</h1>
      <p className='explore-menu-texto'>Descubra as delícias que preparamos para você! Do saudável ao indulgente, nosso cardápio tem opções para todos os gostos. Explore sabores incríveis e escolha seu prato favorito agora mesmo.
      </p>
      <div className="explore-menu-lista">
        {menu_list.map((item, index) => {
            return (
                <div onClick={() => setCategoria(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-lista-item'>
                    <img className={categoria===item.menu_name?"active":""} src={item.menu_image}/>
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
