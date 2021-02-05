import { BrowserRouter } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux';
import Menu from './Componentes/Menu';
import Rotas from './rotas'
import Rodape from './Componentes/Rodape';
import store from './Redux/store';

//console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
