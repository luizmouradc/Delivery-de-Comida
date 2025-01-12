import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Carrinho from './pages/Carrinho/Carrinho'
import FazerPedido from './pages/FazerPedido/FazerPedido'
import Footer from './components/Footer/Footer'
import JanelaLogin from './components/JanelaLogin/JanelaLogin'
import Verify from './pages/Verify/Verify'
import MyOrders from './pages/MyOrders/MyOrders'

const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
  <>
  {showLogin?<JanelaLogin setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carrinho' element ={<Carrinho/>} />
        <Route path='/pedido' element={<FazerPedido/>}/>
        <Route path='/verify' element={<Verify/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App
