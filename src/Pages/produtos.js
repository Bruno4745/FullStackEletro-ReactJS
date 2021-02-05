import { useState, useEffect } from 'react';
import { ListGroup, Row, Col, Table, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Produto from '../Componentes/Produto';

export default function Produtos() {

    const dispatch = useDispatch();

    const carrinho = useSelector(state => 
        state.carrinho.filter(item =>{
            return item.qtd>0
        })
    )

    const totalProdutos = useSelector((state) => 
        state.carrinho.reduce((acumulador, atual) => acumulador + atual.qtd, 0)
    );

    const precoFinal = useSelector(state =>
        state.carrinho.reduce((acumulador, atual) => acumulador + atual.preco * atual.qtd, 0)
    );

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
        <div>
            <Row>
                <h5 className="my-3">Carrinho ({totalProdutos})</h5>
                <div className="mx-auto"></div>
                <Table dark striped bordered hover>
                    <tbody>
                        {carrinho.map((item) => (
                            <tr key={item.id}>
                                <td>{item.nome}</td>   
                                <td className="text-center">R$ {item.preco.toFixed(2)}</td>    
                                <td className="text-center">
                                    <Button onClick={()=>dispatch({type: "REMOVER_UNIDADE", id: item.id})} variant="outline-secondary" size="sm">-</Button>    
                                    {' '}{item.qtd}{' '}
                                    <Button onClick={()=>dispatch({type: "ACRESCENTAR_UNIDADE", id: item.id})} variant="outline-secondary" size="sm">+</Button>  
                                </td>   
                                <td className="text-center">
                                    <Button onClick={()=>dispatch({type: "REMOVER_ITEM", id: item.id})} variant="link">Remover</Button>
                                </td>
                                <td className="text-center">R$ {(item.preco*item.qtd).toFixed(2)}</td>   
                            </tr>
                        ))}
                        <tr>
                            <td colspan="4"><h5>Valor total</h5></td>
                            <td className="text-center"><strong>R$ {precoFinal.toFixed(2)}</strong></td>
                        </tr>
                    </tbody>
                </Table>
                <Button onClick={()=>dispatch({type: "LIMPAR_CARRINHO"})} variant="outline-secondary" className="mb-3 text-end">Limpar Carrinho</Button>
            </Row>
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
                        {produtos && produtos.map(item => <Produto key={item.idproduto} id={item.idproduto} categoria={item.categoria} descricao={item.descricao} preco={item.preco} precofinal={item.precofinal} imagem={item.imagem}/>)}
                </Col>
            </Row>
        </div>
    )
}