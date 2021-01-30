import { useState, useEffect } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import Produto from '../Componentes/Produto';

export default function Produtos() {

    //INICIO - buscar produtos do BD
    const [produtos, setProdutos] = useState([]);
    
    useEffect(() => {
        async function fethData() {
            const url = "http://localhost:3500/produtos";
            const resposta = await fetch(url);
            const dados = await resposta.json();
            setProdutos(dados);
        }
        fethData();
    }, []);
    //FIM - buscar produtos do BD

    //INICIO - filtro das categorias
    const MudarCategoria = (evento) => {
        const categoria = evento.target.id;
        let elementos = document.getElementsByClassName('boxProduto');
        for (var i = 0; i < elementos.length; i++) {
            if (categoria === elementos[i].id || categoria === "todos"){
                elementos[i].style = "display: inline-block";
            }
            else{
                elementos[i].style = "display: none";
            }
        }
    }
    //FIM - filtro das categorias

    return(
        <Row>
            <Col className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3">
                <h3>Categorias</h3>
                <ListGroup className="px-0">  
                    <ListGroup.Item action onClick={MudarCategoria} id="todos">Mostrar todos (12)</ListGroup.Item>
                    <ListGroup.Item action onClick={MudarCategoria} id="geladeira">Geladeiras (3)</ListGroup.Item>
                    <ListGroup.Item action onClick={MudarCategoria} id="fogao">Fogão (2)</ListGroup.Item>
                    <ListGroup.Item action onClick={MudarCategoria} id="microondas">Micro-ondas (3)</ListGroup.Item>
                    <ListGroup.Item action onClick={MudarCategoria} id="lavadouraroupa">Lavadoura de Roupas (2)</ListGroup.Item>
                    <ListGroup.Item action onClick={MudarCategoria} id="lavalouca">Lava Louças (2)</ListGroup.Item>
                </ListGroup>
            </Col>
            <Col className="col-12 col-sm-6 col-md-8 col-lg-9 mt-3">
                    {produtos && produtos.map(item => <Produto key={item.idproduto} categoria={item.categoria} descricao={item.descricao} preco={item.preco} precofinal={item.precofinal} imagem={item.imagem}/>)}
            </Col>
        </Row>
    )
}