import React, { Component } from 'react';
import { Container } from "reactstrap";
export class LoginUsuario extends Component {
    constructor(){
        super();
        this.state ={
            email:"",
            password:"",
        };
        this.handleChange = this.handleChange.bind(this);
        this.loginUsuario = this.loginUsuario.bind(this);
    }
    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
      }
    
      loginUsuario(e) {
          e.preventDefault()
          const response = fetch("http://localhost:4000/api/auth/signin",{
              method:'POST',
              headers: {'Content-Type': 'application/json'},
              body: JSON.stringify({
              email: this.state.email,
              password: this.state.password, 
          })

        })

    
    const data = response.json
    console.log(data)
    if(data){
        localStorage.setItem('token', data)
        alert('Login exitoso')
    }else{
        alert('verifique usuario y contraseña')
    }
}
    render() {
        return (
            <Container>
        <h4>Ingresar</h4>
        <form onSubmit={this.loginUsuario} className="form-group">          
          <div className="mb-3">
            <label for="lblemail" className="form-label">
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
          <div className="mb-3">
            <label for="lblPassword" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="lblPassword"
              placeholder="Ingrese su clave"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Ingresar
            </button>
          </div>
        </form>
      </Container>
            
    );
    }
}

export default LoginUsuario;
