import { Switch, Route } from 'react-router-dom';

import Home from './Pages/home';
import Produtos from './Pages/produtos';
import Pedidos from './Pages/pedidos';
import Lojas from './Pages/lojas';
import Contato from './Pages/contato';

function Rotas(){
    return(
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/produtos' component={Produtos} />
            <Route exact path='/pedidos' component={Pedidos} />
            <Route exact path='/lojas' component={Lojas} />
            <Route exact path='/contato' component={Contato} />
        </Switch>
    )
}

export default Rotas;