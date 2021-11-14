import './App.css';
import React from 'react';
//import Producto from './Componentes/Producto';
//import { Container, Row } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CrearProducto from './Componentes/CrearProducto';
import ListarProductos from './Componentes/ListarProductos';
import Navegacion from './Componentes/Navegacion';
import Principal from './Componentes/Principal';

class App extends React.Component{
    render(){
      return (
    
      <Router>
        <Navegacion/>
        <Route path="/crear" component = {CrearProducto}/>
        <Route path="/listar" component = {ListarProductos}/>
        <Route path="/" exact component = {Principal}/>
      
      
      </Router>
    );
  }
}

export default App;
