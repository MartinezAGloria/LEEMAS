import React, { Component} from 'react';
import {Container} from 'reactstrap';


export class CrearUsuario extends Component {
    constructor(){
        super();
        this.state ={
            username:"",
            email:"",
            password:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.crearUsuario = this.crearUsuario.bind(this)
    }

handleChange(e){
    const {name, value} = e.target;
    this.setState({
        [name]: value,
    });
}

crearUsuario(e){
    
    e.preventDefault();
    fetch("http://localhost:4000/api/auth/signup",{
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          alert("Usuario creado desde CrearUsuario.js");
          window.location.href = '/loginUsuario'
          

        });
}

render() {      
    return(
        <Container>
            <h4>Crear usuario</h4>
                <form onSubmit={this.crearUsuario} className = "form-group">
                    <div className='mb-3'>
                        <label for= 'lblUsuario' className='form-label'>
                            Usuario
                        </label>
                        <input
                        name="username"
                        type="text"
                        className="form-control"
                        id="lblUsuario"
                        placeholder="Ingrese usuario"
                        onChange={"this.handleChange"}
                        value={this.state.username}
                        />
                    </div>
                    <div className='mb-3'>
                        <label for= 'lblemail' className='form-label'>
                            e-mail
                        </label>
                        <input
                        name="email"
                        type="email"
                        className="form-control"
                        id="lblemail"
                        placeholder="Ingrese email"
                        onChange={this.handleChange}
                        value={this.state.email}
                        />
                        
                    </div>
                    <div className='mb-3'>
                        <label for= 'lblPassword' className='form-label'>
                            Password
                        </label>
                        <input
                        name="password"
                        type="password"
                        className="form-control"
                        id="lblPassword"
                        placeholder="Ingrese su clave"
                        onChange={"this.handleChange"}
                        value={this.state.password}
                        />

                    </div>
                    
                    <div className='mb-3'>
                        <button type='submit' className="btn btn-primary">
                            Sign Up
                        </button>
                    </div>
                </form>
        </Container>
        );
    }
}
export default CrearUsuario;