import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap';
import './Producto.css';
function Producto(props){
    return(
        <Col sm='4'>
            <Card className="Card" body outline color = "primary">
                <CardImg src={props.imagen} />
                    <CardBody>
                        <CardTitle>{props.titulo}</CardTitle>
                        <CardSubtitle><b>Precio:</b>{props.precio}</CardSubtitle>
                        <CardText>{props.descripcion}</CardText>
                        <button className="Boton">Pedir</button>
                    </CardBody>

                
            </Card>
        </Col>
    )
}

export default Producto;