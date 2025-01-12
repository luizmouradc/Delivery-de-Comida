import React, { useContext, useState } from 'react'
import './JanelaLogin.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const JanelaLogin = ({setShowLogin}) => {

    const {url, setToken} = useContext(StoreContext)

    const[currState, setCurrState] = useState("Login")
    const [data, setData] = useState({
        name:"",
        email:"",
        password:""
    })

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({...data, [name]:value}))
    }

    const onLogin = async(event) =>{
        event.preventDefault()
        let newUrl = url;
        if(currState==="Login") {
            newUrl += "/api/user/login"
        }else{
            newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl, data);

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token",response.data.token);
            setShowLogin(false)
        }else{
            alert(response.data.message)
        }
    }

  return (
    <div className='janela-login'>
        <form onSubmit={onLogin} className="janela-login-container">
            <div className="janela-login-titulo">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
            </div>

            <div className='janela-login-inputs'>
                {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Seu Nome' required />}
                <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Seu Email' required />
                <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Senha' required />
            </div>

            <button type='submit'>{currState==="Inscreva-se"?"Criar uma Conta":"Login"}</button>

            <div className="janela-login-condition">
                <input type="checkbox" required />
                <p>Ao continuar, concordo com os termos de uso e política de privacidade</p>
            </div>

            {currState==="Login"
                ?<p>Criar uma nova conta? <span onClick={()=>setCurrState("Inscreva-se")}>Clique aqui</span></p>
                :<p>Já tem uma conta? <span onClick={()=>setCurrState("Login")}>Faça Login aqui</span></p>
            }
        </form>
    </div>
  )
}

export default JanelaLogin
