import React, { useEffect, useState } from 'react'
import './List.css'
import axios from "axios"
import {toast} from "react-toastify"

export const url = 'https://delivery-de-comida-2.onrender.com'

const List = ({url}) => {

  const [list, setList] = useState([])

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    //console.log(response.data)
    if(response.data.success){
      setList(response.data.data)
    }else{
      toast.error("Error")
    }
  }

  const removeFood = async(foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{id:foodId})
    await fetchList();
    if(response.data.success){
      toast.success(response.data.message)
    }else{
      toast.error("Error")
    }
  }

  useEffect(() => {
    fetchList();
  }, [])

  return (
    <div className='list add flex-col'>
      <p>Lista de todos os alimentos</p>

      <div className="list-table">
        <div className="list-table-format title">
          <b>Imagem</b>
          <b>Nome</b>
          <b>Categoria</b>
          <b>Preço</b>
          <b>Remover</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={`${url}/images/`+ item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>R${item.price}</p>
              <p onClick={() => removeFood(item._id)} className='cursor'>X</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
