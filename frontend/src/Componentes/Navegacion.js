import React, { Component } from 'react'
import { Link } from 'react-router-dom' 
export class Navegacion extends Component {
  render() {
    return (
      <nav classname="navbar navbar-expand-lg navbar-dark bg-dark">
        <div classname="container-fluid">
          
          <Link className="navbar-brand" to="/">
            Principal
          </Link>
          <button
            classname="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span classname="navbar-toggler-icon"></span>
          </button>
          <div classname="collapse navbar-collapse" id="navbarNav">
            <ul classname="navbar-nav">
              <li classname="nav-item">
                
                  <Link className="nav-link" to="/listar">
                  Consulta libros
                  </Link>
                
              </li>
              <li classname="nav-item">
                <Link className= "nav-link" to="/crear">
                  Mis libros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crearUsuario">
                  Crear Usuario
                </Link>
              </li>
              
              
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navegacion
