import React, { useContext, useEffect, useState } from 'react'
import './MyOrders.css'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { assets } from '../../assets/assets';

const MyOrders = () => {

    const [data, setData] = useState([]);
    const {url, token} = useContext(StoreContext)

    const fetchOrders = async () => {
        const response = await axios.post(url+"/api/order/userOrders",{},{headers:{token}});
        setData(response.data.data);
        console.log(response.data.data)
    }

    useEffect(()=> {
        if(token){
            fetchOrders();
        }
    }, [token])

    // Função para traduzir status para português
    const translateStatus = (status) => {
        switch (status) {
            case "Food Processing":
                return "Processando Pedido";
            case "Pending Approval":
                return "Aguardando Aprovação";
            case "Shipped":
                return "Enviado para Entrega";
            case "Delivered":
                return "Pedido Entregue";
            case "Canceled":
                return "Pedido Cancelado";
            default:
                return "Status Desconhecido";
        }
    };

  return (
    <div className='my-orders'>
      <h2>Meus Pedidos</h2>
      <div className="container">
        {data.map((order, index) =>{
            return (
                <div key={index} className='my-orders-order'>
                    <img src={assets.parcel_icon}  />
                    <p>{order.items.map((item,index) => {
                        if(index === order.items.length-1){
                            return item.name+" x "+item.quantity
                        }else{
                            return item.name+" x "+item.quantity+", "
                        }
                    })}</p>
                    <p>R${order.amount},00</p>
                    <p>Items: {order.items.length}</p>
                    <p><span>&#x25cf;</span> <b>{(order.status)}</b></p>
                    <button onClick={fetchOrders}>Acompanhar pedido</button>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default MyOrders
