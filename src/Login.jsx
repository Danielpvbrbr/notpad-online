import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from  './components/Input'
import './Login.css'
import Cookies from 'universal-cookie';
import axios from 'axios';


export default class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            User:'',
            Pass:'',
            Usuario:[]
        }
    }
    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit = async (e)=>{
        const cookies = new Cookies();
        const { User,Pass } = this.state
     
            axios.get(`http://localhost:8000/api/login/${User}/${Pass}`)
            .then(res=>{
                const Usuario = res.data.map(result => result.usuario);
                const Senha = res.data.map(result => result.senha);
                const Id = res.data.map(result => result.id_on);
              
                if(Usuario.toString() === User && Senha.toString() === Pass){
                    console.log('Login realizado com sucesso');
                    const getUser = res.data.map(getNOME => getNOME.usuario);
                    cookies.set("Id", Id.toString(),{ path: "/home",maxAge: 1020});
                    cookies.set('Usuario',getUser.toString(),{ path: "/home",maxAge: 1020});
                    window.location.replace('/home')
                }else{
                    console.log('Falha ao realizar login! Usuario o senha incorreto!!');
                }
            })
        e.preventDefault()
    }

    render(){
        
        return(
            <div>
                
                    <form id='formLogin' onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend> Acesso ao Sistema Notpad Online </legend>
                            <label>Usuário:</label>
                            <Input 
                            type='texto' 
                            className="btnUser" 
                            name="User" 
                            placeholder="Digite seu Usuário"
                            onChange={this.handleChange}
                            />
                            
                            <label>Senha:</label>
                            <Input
                             type='texto' 
                             className="btnPass" 
                             name="Pass" 
                             placeholder="Digite sua Senha"
                             onChange={this.handleChange}
                             />
                           
                            
                            <button>Entrar</button>
                            <Link to={'/registro'}>
                                <label className="registrar">Cadastre-se</label>
                            </Link>
                            <label className="esqSenha">Esqueceu a senha</label>
                        </fieldset>
                    </form>
                    
            </div>
        )
    }
}