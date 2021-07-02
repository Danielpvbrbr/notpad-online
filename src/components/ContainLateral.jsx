import axios from 'axios';
import React, { Component } from 'react';
import './ContainLateral.css';
import  FcFullTrash  from "../Icon/fullTrash.svg";
import Cookies from 'universal-cookie';

export default class ContainLateral extends Component {
    constructor(props){
        super(props)
        this.state = {
            lista: [],
        }
    }

    async componentDidMount(){
        const cookies = new Cookies();
        const Id = cookies.get('Id');

        axios.get(`http://localhost:8000/api/list/${Id}`)
        .then(res =>{
            const lista = res.data;
            this.setState({ lista });
        })  
        
    }
    getTitulo = (id) =>{
        this.props.setInfo(id)
    }

    delUser = (id) => {
        const confirm = window.confirm("Voçe deseja realmente deletar a anotação?")
        console.log(id)
        if(confirm === true){
            axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then(res =>{
                // console.log(res)
                // console.log(res.data)
                window.location.replace('/home')
            }) 
        }
    } 

    render(){
        const { lista } = this.state;  
        
        return(
                <div className="contain-lateral">

                    <h1>Notpad-online</h1>
                    
                    <section className="contain-lista">
                        
                            {
                                lista.map((lista,i) => 
                                    <ul key={i}>
                                        <li>
                                            <section onClick={()=>this.getTitulo(lista.id)} className="cont">
                                                <div className="cont-button1">
                                                    <button className="btn" type="button">{lista.titulo}</button>
                                                </div>
                                                <div className="cont-button2">
                                                    <img src={FcFullTrash} className="btn-delete" onClick={()=>this.delUser(lista.id)} />
                                                </div>
                                            </section>
                                           
                                            
                                        </li>
                                    </ul>
                                   
                                )
                            }
                    </section>

                </div>
        );
    }
};
