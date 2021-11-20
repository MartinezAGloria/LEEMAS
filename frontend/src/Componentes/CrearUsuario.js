import React, { Component} from 'react'
import {Container} from 'reactstrap'

export class CrearUsuario extends Component {
    constructor(){
        super()
        this.state ={
            username:'',
            email:'',
            password:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

handleChange(e){
    const {name, value} = e.target;
    this.setState({
        [name]: value
    });
}

crearUsuario(e){
    e.preventDefault();
    fetch("http://localhost:4000/api/users",{
            method: "POST",
            body: JSON.stringify(this.state),
            headers:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
}

render() {      
        return(
        <Container>
            <h4>Crear usuario</h4>
                <form onSubmit={this.onSubmit} className = "form-group">
                    <div className='mb-3'>
                        <label for= 'lblUsuario' className='form-label'>
                            Usuario
                        </label>
                        <input type="text" className="form-control"
                        id='lblUsuario' placeholder="Ingrese usuario" onChange="this.handleChange"/>
                    </div>
                    <div className='mb-3'>
                        <label for= 'lblemail' className='form-label'>
                            e-mail
                        </label>
                        <input type="email" className="form-control"
                        id='lblemail' placeholder="Ingrese email" onChange="this.handleChange"/>
                    </div>
                    <div className='mb-3'>
                        <label for= 'lblPassword' className='form-label'>
                            Password
                        </label>
                        <input type="password" className="form-control"
                        id='lblPassword' placeholder="Ingrese su clave" onChange="this.handleChange"/>
                    </div>
                    
                    <div className='mb-3'>
                        <button type='submit' className="btn btn-primary">
                            Registrarse
                        </button>
                    </div>
                </form>
        </Container>
        );
    }
}
export default CrearUsuario;