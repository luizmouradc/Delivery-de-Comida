import React, { useState, useEffect } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets } from '../../assets/assets.js';

export const url = 'https://delivery-de-comida-2.onrender.com'

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(url + "/api/order/list");

      if (response.data.success) {
        setOrders(response.data.data);
        console.log(response.data.data);
      } else {
        toast.error("Erro ao carregar pedidos.");
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
      toast.error("Erro na conexão com o servidor.");
    }
  };

  const statusHandler = async (event, orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if(response.data.success){
      await fetchAllOrders()
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Pagina de Pedido</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className="order-item">
            <img src={assets.parcel_icon} alt="Ícone de pedido" />
            <div>
              <p className="order-item-food">
                {order.items.map((item, itemIndex) => {
                  if (itemIndex === order.items.length - 1) {
                    return `${item.name} x ${item.quantity}`;
                  } else {
                    return `${item.name} x ${item.quantity}, `;
                  }
                })}
              </p>
              <p className='order-item-name'>De: {order.address.firstName+" "+order.address.lastName}</p>
              <div className="order-item-address">
                <p>{order.address.street+","}</p>
                <p>{order.address.city+", "+order.address.state+", "+order.address.country+", "+order.address.zipcode}</p>
              </div>
              <p className="order-item-phone">{order.address.phone}</p>
            </div>
            <p>Items : {order.items.length }</p>
            <p>R${order.amount}</p>
            <select onChange={(event) => statusHandler(event,order._id)} value={order.status}>
              <option value="Processando Pedido">Processando Pedido</option>
              <option value="Saiu para Entrega">Saiu para Entrega</option>
              <option value="Entregue">Entregue</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
