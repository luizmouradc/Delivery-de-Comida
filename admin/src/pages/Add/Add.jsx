import React, { useState } from 'react'
import './Add.css'
import {assets} from '../../assets/assets'
import axios from "axios"
import { toast } from 'react-toastify'

export const url = 'https://delivery-de-comida-2.onrender.com'

const Add = ({url}) => {

  
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name:"",
    description:"",
    price:"",
    category:"Salada"
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({...data, [name]:value}))
  }

  const onSubmitHandler = async(event) => {
    event.preventDefault() // ao clicar no botao adicionar as informaçoes nao irao sumir
    const formData = new FormData()
    formData.append("name", data.name)
    formData.append("description", data.description)
    formData.append("price", Number(data.price))
    formData.append("category", data.category)
    formData.append("image", image)
    const response = await axios.post(`${url}/api/food/add`, formData);

    if(response.data.success){
      setData({
        name:"",
        description:"",
        price:"",
        category:"Salada"
      })
      setImage(false)
      toast.success(response.data.message)
    }else{
      toast.error(response.data.message)
    }
  }

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className="add-img-upload flex-col">

          <p>Carregar imagem</p>

          <label htmlFor="image">
            <img src={image?URL.createObjectURL(image):assets.upload_area} />
          </label>

          <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden required />
        </div>

        <div className="add-product-name flex-col">
          <p>Nome do Produto</p>
          <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Digite aqui' />
        </div>

        <div className="add-product-description flex-col" >
          <p>Descrição do produto</p>
          <textarea onChange={onChangeHandler} value={data.description}  name="description" rows="6" placeholder='Escreva conteúdo aqui' required></textarea>
        </div>

        <div className="add-category-price">
          <div className="add-category flex-col">
            <p>Categoria do Produto </p>
            <select onChange={onChangeHandler} name="category" >
              <option value="Salada">Salada</option>
              <option value="Burrito">Burrito</option>
              <option value="Sobremesas">Sobremesas</option>
              <option value="Sanduíche">Sanduíche</option>
              <option value="Bolo">Bolo</option>
              <option value="Vegetariano">Vegetariano</option>
              <option value="Macarrão">Macarrão</option>
              <option value="Talharim">Talharim</option>
            </select>
          </div>

          <div className="add-price flex-col">
            <p>Preço do Produto</p>
            <input onChange={onChangeHandler} value={data.price}  type="Number" name='price' placeholder='ex: R$30' />
          </div>
        </div>
          <button type='submit' className='add-btn'>Adicionar</button>
      </form>
    </div>
  )
}

export default Add
