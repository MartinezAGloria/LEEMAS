import React, { Component } from 'react'
import {Col} from 'reactstrap'
export default class CrearProducto extends Component {
    constructor(){
        super()
        this.state ={
            titulo: '',
            imagen: '',            
            descripcion: '',
            precio:'',
            stock:''
        }
    }
    render() {
        return (
            
            <Col sm="4">
                <h4>Nuevo Libro</h4>
                <form>
                    <div className="mb-3">
                        <input name="titulo" className="form-control" type="text" placeholder="Ingrese Título" value={this.state.titulo} />
            
                    </div>
                    <div className="mb-3">
                        <input name="imagen" className="form-control" type="text" placeholder="Ingrese link de imagen" value={this.state.imagen} />
            
                    </div>
                    <div className="mb-3">
                        <input name="dscripcion" className="form-control" type="text" placeholder="Ingrese autor" value={this.state.descripcion} />
            
                    </div>
                    <div className="mb-3">
                        <input name="precio" className="form-control" type="text" placeholder="Ingrese precio" value={this.state.precio} />
            
                    </div>
                    <div className="mb-3">
                        <input name="stock" className="form-control" type="number" placeholder="Ingrese cantidad" value={this.state.stock} />
            
                    </div>
                    <button type="submit" className="btn btn-primary">Guardar</button>
                </form>
            </Col>
            
        )
    }
}
