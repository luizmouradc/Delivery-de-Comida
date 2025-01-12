import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo}  />
            <p>O Tomato conecta você aos melhores sabores da sua região. Com rapidez e qualidade, entregamos suas refeições favoritas diretamente à sua porta. Simplifique sua rotina com o Tomato!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} />
                <img src={assets.twitter_icon} />
                <img src={assets.linkedin_icon} />
            </div>
        </div>

        <div className="footer-content-center">
            <h2>EMPRESA</h2>
            <ul>
                <li>Home</li>
                <li>Sobre nós</li>
                <li>Delivery</li>
                <li>Política de Privacidade</li>
            </ul>
        </div>

        <div className="footer-content-right">
            <h2>ENTRE EM CONTATO</h2>
            <ul>
                <li>11 97578-6392</li>
                <li>tomato@email.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 © Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
