import React, { Component } from 'react'
import { Col, Container } from 'reactstrap'
export default class CrearProducto extends Component {
  constructor() {
    super()
    this.state = {
      titulo: '',
      imagen: '',
      descripcion: '',
      precio: '',
      stock: '',
      contacto: '',
      _id: '',
      productos: [],
    }
    this.handleChange = this.handleChange.bind(this)
    this.agregarProducto = this.agregarProducto.bind(this)
  }
  handleChange(e) {
    const { name, value } = e.target
    this.setState({
      [name]: value,
    })
  }
  componentDidMount() {
    this.fetchProductos()
  }
  // configura productos que es un array definido en la linea 14 para luego hacer una mapeo en la 214.
  fetchProductos() {
    fetch('http://localhost:4000/api/articulos')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ productos: data })
        console.log(this.state.productos)
      })
  }

  deleteProducto(id) {
    if (window.confirm('Va a eliminar el libro?')) {
      fetch(`http://localhost:4000/api/articulos/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          alert('Libro eliminado')
          this.fetchProductos()
        })
    }
  }

  editProducto(id) {
    fetch(`http://localhost:4000/api/articulos/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        this.setState({
          titulo: data.titulo,
          imagen: data.imagen,
          descripcion: data.descripcion,
          precio: data.precio,
          stock: data.stock,
          contacto: data.contacto,
          _id: data._id,
        })
      })
  }
  agregarProducto(e) {
    e.preventDefault()
    //si state._id es diferente a vacío->voy a actualizar: PUT
    if (this.state._id) {
      alert('entro aquí' + this.state.stock)
      fetch(`http://localhost:4000/api/articulos/${this.state._id}`, {
        method: 'PUT',

        body: JSON.stringify({
          titulo: this.state.titulo,
          imagen: this.state.imagen,
          descripcion: this.state.descripcion,
          precio: this.state.precio,
          stock: this.state.stock,
          contacto: this.state.contacto,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'aplication/json',
        },
      })
        .then((res) => res.json)
        .then((data) => {
          alert('Cambio realizado desde CrearProducto.js')
          //reseteamos el estado de todas las variables con vacio en el formulario
          this.setState({
            titulo: '',
            imagen: '',
            descripcion: '',
            precio: '',
            stock: '',
            contacto: '',
            _id: '',
          })
          this.fetchProductos() //recupera todos los documentos de la base de datos
        })
    }
    //si state._id no está vacío-> voy a crearlo: POST
    else {
      fetch('http://localhost:4000/api/articulos', {
        method: 'POST',
        body: JSON.stringify(this.state),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          alert('Libro adicionado a tu lista desde CrearProducto.js')
          this.fetchProductos()
        })
    }
  }
  render() {
    return (
      <Container>
        <Col sm="3">
          <h4>Nuevo Libro</h4>
          <form onSubmit={this.agregarProducto}>
            <div className="mb-3">
              <input
                name="titulo"
                className="form-control"
                type="text"
                placeholder="Título"
                onChange={this.handleChange}
                value={this.state.titulo}
              />
            </div>
            <div className="mb-3">
              <input
                name="imagen"
                className="form-control"
                type="text"
                placeholder="Ingrese link de imagen"
                onChange={this.handleChange}
                value={this.state.imagen}
              />
            </div>
            <div className="mb-3">
              <input
                name="descripcion"
                className="form-control"
                type="text"
                placeholder="Autor"
                onChange={this.handleChange}
                value={this.state.descripcion}
              />
            </div>
            <div className="mb-3">
              <input
                name="precio"
                className="form-control"
                type="text"
                placeholder="Ciudad donde se encuentra el libro"
                onChange={this.handleChange}
                value={this.state.precio}
              />
            </div>
            <div className="mb-3">
              <input
                name="stock"
                className="form-control"
                type="number"
                placeholder="Año de edición"
                onChange={this.handleChange}
                value={this.state.stock}
              />
            </div>
            <div className="mb-3">
              <input
                name="contacto"
                className="form-control"
                type="text"
                placeholder="cuenta de correo"
                onChange={this.handleChange}
                value={this.state.contacto}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Guardar
            </button>
          </form>
        </Col>
        <Col sm="10">
          <h4>Lista de Libros</h4>
          <table className="table">
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Imagen</th>
                <th>Autor</th>
                <th>Ciudad</th>
                <th>Año de Edición</th>
                <th>Contacto</th>
                <th>Operacion</th>
              </tr>
            </thead>
            <tbody>
              {this.state.productos.map((producto) => {
                return (
                  <tr key={producto._id}>
                    <td>{producto.titulo}</td>
                    <td>{producto.imagen}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.stock}</td>
                    <td>{producto.contacto}</td>
                    <td>
                      <button
                        onClick={() => this.editProducto(producto._id)}
                        type="button"
                        className="btn btn-info"
                      >
                        Editar
                      </button>
                      <button
                        onClick={() => this.deleteProducto(producto._id)}
                        type="button"
                        className="btn btn-danger"
                      >
                        Suprimir
                      </button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </Col>
      </Container>
    )
  }
}
