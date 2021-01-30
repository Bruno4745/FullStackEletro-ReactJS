import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Menu from './Componentes/Menu';
import Rotas from './rotas'
import Rodape from './Componentes/Rodape';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <Menu />
        </header>
        <main>
          <Container>
            <Rotas />
          </Container>
        </main>
        <footer>
          <Rodape />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
