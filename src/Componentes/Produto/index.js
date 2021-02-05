import { Card, Button, Col } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

export default function Produto(props){

    const dispatch = useDispatch()

    return(
        <Col style={{display: "inline-block", verticalAlign: "bottom"}} id={props.categoria} className={"boxProduto col-12 col-md-6 col-lg-4 col-xl-3"}>
            <Card border="white">
                <Card.Img className="mx-auto" variant="top" style={{ width: '120px' }} src={require(`./imagens/${props.imagem}`).default} alt="Imagem do Produto" />
                <Card.Body className="text-center">
                    <Card.Title>{props.descricao}</Card.Title>
                    <Card.Text style={{fontSize: "small"}} className="m-0"><strike>R${props.preco.toFixed(2)}</strike></Card.Text>
                    <Card.Text style={{color: "red", fontSize: "large"}} className="m-0">R${props.precofinal.toFixed(2)}</Card.Text>
                    <Button onClick={()=>dispatch({type: "ADICIONAR_NO_CARRINHO", id: props.id, nome: props.descricao})} variant="outline-success" size="sm" className="mt-2" style={{ width: '100%' }}>Adicionar ao carrinho</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}