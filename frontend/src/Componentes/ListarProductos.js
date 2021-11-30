import React, { Component } from 'react'
import Producto from './Producto'
import { Container, Row } from 'reactstrap';
export class ListarProductos extends Component {
    constructor()
  {
    super();
    this.state = 
    {
      titulo:'',
      imagen:'',
      descripcion:'',
      precio:'',
      stock:'',
      contacto:'',
      listaProductos: []
    };
  }
  componentDidMount(){
    this.fetchProductos();
  }
  fetchProductos(){
    fetch('http://localhost:4000/api/articulos')
    .then(res=> res.json())
    .then(data =>{
      this.setState({listaProductos:data})
      console.log(this.state.listaProductos)
    })
  }
  render()
  {
    var arrayComponente= this.state.listaProductos.map(
    
      (listaProductos, i) =>
      {
        return(
          <Producto
          key={i}
          titulo={listaProductos.titulo}
          imagen={listaProductos.imagen}
          descripcion={listaProductos.descripcion}
          precio={listaProductos.precio}
          stock ={listaProductos.stock}
          contacto ={listaProductos.contacto}
          />
        )
      }

    )
    
        return (
            <Container>
                <Row>
                
                {arrayComponente}
                </Row>
        
            </Container>
            
        )
    }
}

export default ListarProductos
