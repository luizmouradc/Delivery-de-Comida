import React, { useContext, useState } from 'react'
import './Carrinho.css'
import {StoreContext} from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Carrinho = () => {

  const {cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className="carrinho">
      <div className="carrinho-items">
        <div className="carrinho-items-titulo">
          <p>Items</p>
          <p>Titulo</p>
          <p>Preço</p>
          <p>Quantidade</p>
          <p>Total</p>
          <p>Remover</p>
        </div>
        
        <br />
        <hr />

        {food_list.map((item, index)=>{
          if(cartItems[item._id] > 0){
            return(
              <div>
                <div className='carrinho-items-titulo   carrinho-items-item'>
                  <img src={url+"/images/"+item.image} />
                  <p>{item.name}</p>
                  <p>R${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>R${item.price*cartItems[item._id]} </p>
                  <p onClick={()=>removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>

      <div className="carrinho-botao">
        <div className="carrinho-total">
          <h2>Total do Carrinho</h2>
          <div>
            <div className="carrinho-total-detalhes">
              <p>Subtotal</p>
              <p>R${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="carrinho-total-detalhes">
              <p>Taxa de entrega</p>
              <p>R${getTotalCartAmount() === 0?0:7}</p>
            </div>
            <hr />
            <div className="carrinho-total-detalhes">
              <b>Total</b>
              <b>R${getTotalCartAmount()===0?0:getTotalCartAmount()+7}</b>
            </div>
          </div>
          <button onClick={()=>navigate('/pedido')}>FAZER O CHECK-OUT</button>
        </div>
        <div className="carrinho-promocode">
        <div>
          <p>Se você tiver um código promocional, insira-o aqui</p>
          <div className="carrinho-promocode-input">
            <input type="text" placeholder='Código Promocional' />
            <button>Enviar</button>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Carrinho
