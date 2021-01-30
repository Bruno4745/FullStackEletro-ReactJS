import { Jumbotron, Card, CardGroup } from 'react-bootstrap';

export default function Lojas() {
    return(
        <Jumbotron className="bg-white">
			<h1>Nossas Lojas</h1>
			<hr className="my-4"/>
			<CardGroup>
				<Card className="text-center" border="white">
					<Card.Body>
						<Card.Title>Sao Paulo</Card.Title>
						<Card.Text>Avenida Paulista, 985</Card.Text>
						<Card.Text>3&ordm; andar</Card.Text>
						<Card.Text>Jardins</Card.Text>
						<Card.Text>(11) 1234-5678</Card.Text>
					</Card.Body>
				</Card>
				<Card className="text-center" border="white">
					<Card.Body>
						<Card.Title>Rio de Janeiro</Card.Title>
						<Card.Text>Avenida Presidente Vargas, 214</Card.Text>
						<Card.Text>10&ordm; andar</Card.Text>
						<Card.Text>Centro</Card.Text>
						<Card.Text>(21) 8765-4321</Card.Text>
					</Card.Body>
				</Card>
				<Card className="text-center" border="white">
					<Card.Body>
						<Card.Title>Santa Catarina</Card.Title>
						<Card.Text>Rua Major Ávila, 237</Card.Text>
						<Card.Text>Vila Mariana</Card.Text>
						<Card.Text>(47) 1357-2468</Card.Text>
					</Card.Body>
				</Card>
				</CardGroup>
		</Jumbotron>
    )
}