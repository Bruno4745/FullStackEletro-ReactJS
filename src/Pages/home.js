import { Jumbotron, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
    return(
        <Jumbotron className="bg-white">
            <h1>Seja bem vindo(a)!</h1>
            <p>Aqui em nossa loja, <i>programadores tem desconto </i>nos produtos para sua casa!</p>
            <hr className="my-4"></hr>
            <p>Conheca todos os nossos produtos clicando abaixo!</p>
                <Button variant="success btn-lg" as={Link} href="/produtos" to="/produtos">Nossos Produtos!</Button>
        </Jumbotron>
    )
}