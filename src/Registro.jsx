import axios from 'axios';
import React, { Component } from 'react';
import Input from  './components/Input';
import './Registro.css';
import { Link } from 'react-router-dom'

export default class Registro extends Component{
    constructor(props){
        super(props);
        this.state={
            getNome: '',
            getSobrenome: '',
            getEmail: '',
            getUsuario: '',
            getSenha: '',
        }
    }
    handleChange = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    handleSubmit = async (e) => {
       
        const { getNome, getSobrenome, getEmail, getUsuario, getSenha } = this.state
        axios.post('http://localhost:8000/api/cadastro',{
            getNome,
             getSobrenome,
              getEmail, 
               getUsuario,
                getSenha, 
                 
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            window.location.replace('/')
            console.log("Valores Salvo no banco !!")
        })

        
        e.preventDefault()
    }
   

    render(){
        return(
            <div>
                
                    <form id='formRegistro' onSubmit={this.handleSubmit}>
                        <fieldset>
                            <legend>Rigistro para acesso ao sistema Notpad Online</legend>
                            
                            <label>Nome:</label>
                                <Input type='texto' className="campIput" required onChange={this.handleChange} name="getNome" placeholder="Digite seu nome" maxLength='20' /> 
                            <label>Sobrenome:</label>
                                <Input type='texto' className="campIput" required onChange={this.handleChange} name="getSobrenome" placeholder="Digite sua sobrenome" maxLength='50'/>
                            
                            <label>E-mail:</label>
                                <Input type='texto' className="campIput" required onChange={this.handleChange} name="getEmail" placeholder="Digite seu e-mail" maxLength='20'/>

                            <label>Usuario:</label>
                                <Input type='texto' className="campIput" required onChange={this.handleChange} name="getUsuario" placeholder="Digite seu usuário" maxLength='14'/>                         
                            
                            <label>Senha:</label>
                                <Input type='password' className="campIput" required onChange={this.handleChange} name="getSenha" placeholder="Digite sua senha" maxLength='6'/>
                            <p></p>
                            <button>Cadastre-se</button>
                            <Link to={'/'}>
                                <button >Já tem uma conta?</button>
                            </Link>
                        </fieldset>
                    </form>
                
              
                    
            </div>
        )
    }
}