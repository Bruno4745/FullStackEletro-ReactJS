import { Form, Button, Container, Table, InputGroup, Spinner } from 'react-bootstrap';
import { useState, useEffect, lazy, Suspense } from 'react';

const Pedido = lazy(() => import('../Componentes/Pedidos'))

export default function Pedidos(){
    
    //INICIO - buscar pedidos do BD
    const [ pedidos, setPedidos ] = useState([]);

    useEffect(() => {
        async function fethData() {
            const url = "http://localhost:3500/mostrar/pedidos";
            const resposta = await fetch(url);
            const resultado = await resposta.json();
            setPedidos(resultado);
        }
        fethData();
    }, [])
    //FIM - buscar pedidos do BD

    //INICIO - capturar dados do formulario
    const [dadosForm, setDadosForm] = useState({
        nome_cliente: '',
        endereco: '',
        telefone: '',
        nome_produto: '',
        valor_unit: 0,
        quantidade: 0,
        valor_total: 0
    })

    function handleChange(evento){
        dadosForm[evento.target.name] = evento.target.value;
        //console.log(dadosForm);
        if(dadosForm.valor_unit > 0 && dadosForm.quantidade > 0){
            atualizaTotal();
        }
    }
    
    const atualizaTotal = () => { //Funcao para calcular valor total automaticamente (valor unit * qtd)
        dadosForm.valor_total = parseFloat(dadosForm.valor_unit) * parseInt(dadosForm.quantidade);
        document.getElementById("valor_total").value = dadosForm.valor_total;
    }
    //FIM - capturar dados do formulario

    //INICIO - envia dados do formulario para API inserir no BD
    const enviaPedido = async () => {
        const url = "http://localhost:3500/inserir/pedidos";
        await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(dadosForm)
        })
    }
    //FIM - envia dados do formulario para API inserir no BD

    return(
        <Container>
            <Form onSubmit={enviaPedido} className="col-12 col-md-10 mx-auto my-5">
                <h1>Formulario de Compra</h1>
                <Form.Group>
                    <Form.Label>Nome</Form.Label>
                    <Form.Control id="nome_cliente" name="nome_cliente" className="mb-3" type="text" placeholder="Digite seu nome" onChange={handleChange} required />
                </Form.Group>  
                <Form.Group>
                    <Form.Label>Endereco</Form.Label>
                    <Form.Control id="endereco" name="endereco" className="mb-3" type="text" placeholder="Digite seu endereco" onChange={handleChange} required />
                </Form.Group>  
                <Form.Group>
                    <Form.Label>Telefone</Form.Label>
                    <Form.Control id="telefone" name="telefone" className="mb-3" type="text" placeholder="Digite seu telefone" onChange={handleChange} required />
                </Form.Group>  
                <Form.Group>
                    <Form.Label>Produto</Form.Label>
                        <Form.Control id="nome_produto" name="nome_produto" as="select" onChange={handleChange} required >
                            <option></option>
                            <option>Fogão 5 Bocas Brastemp</option>
                            <option>Fogão Consul 4 bocas cor Inox</option>
                            <option>Geladeira Brastemp Frost Free Duplex 375 litros Inox</option>
                            <option>Geladeira Consul CRE44AK Frost Free Duplex</option>
                            <option>Geladeira Cycle Defrost Inox 475L Electrolux</option>
                            <option>Lava Louças 14 Serviços Brastemp</option>
                            <option>Lava Louças Electrolux 8 Servicos</option>
                            <option>Lavadoura de Roupas Electrolux Automática 13kg</option>
                            <option>Lavadoura de Roupas Samsung WD4000 Inox Look - 11kg</option>
                            <option>Micro-ondas Brastemp 38L com Grill Ative</option>
                            <option>Micro-ondas Electrolux MS37R</option>
                            <option>Micro-ondas Philco 26L</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Valor Unitario</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend className="mb-3">
                        <InputGroup.Text>R$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control id="valor_unit" name="valor_unit" className="mb-3" type="number" step="0.01" placeholder="Digite o valor unitario" onChange={handleChange} required />
                    </InputGroup>
                 </Form.Group>
                <Form.Group>
                    <Form.Label>Quantidade</Form.Label>
                    <Form.Control id="quantidade" name="quantidade" className="mb-3" type="number" min="1" onChange={handleChange} required />
                </Form.Group> 
                <Form.Group>
                    <Form.Label>Valor Total</Form.Label>
                    <InputGroup >
                        <InputGroup.Prepend className="mb-3">
                        <InputGroup.Text>R$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control id="valor_total" name="valor_total" className="mb-3" type="number" step="0.01" readOnly />
                    </InputGroup>
                </Form.Group>
                <Form.Group>
                    <Button type="submit" variant="success">Enviar</Button>
                    {'  '}
                    <Button type="reset" variant="warning">Limpar</Button>
                </Form.Group>
            </Form>
            <h5>Pedidos Realizados:</h5>
            <Suspense fallback={
                <div className="text-center mt-3">
                    <Spinner animation="border" variant="dark"/>
                    <p>Carregando...</p>
                </div>
                }>
                <Table striped bordered hover fluid>
                    <thead>
                        <tr>
                            <th>IdPedido</th>
                            <th>Nome Cliente</th>
                            <th>Endereco</th>
                            <th>Telefone</th>
                            <th>Produto</th>
                            <th>Valor</th>
                            <th>Quantidade</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pedidos && pedidos.map(item => <Pedido key={item.idpedidos} id={item.idpedidos} 
                        nome={item.nome_cliente} endereco={item.endereco} telefone={item.telefone} produto={item.nome_produto}
                        valor={item.valor_unit} quantidade={item.quantidade} total={item.valor_total} />)}
                    </tbody>
                </Table>
            </Suspense>
        </Container>
    )
}