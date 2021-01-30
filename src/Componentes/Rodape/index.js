import './Rodape.css';

function Rodape(){
    return(
        <div className="text-center mt-5">
            <h5 className="text-danger">Formas de Pagamento</h5>
            <img className="imgRodape" src={require(`./Forma_pagamento.png`).default} alt="Formas de Pagamento"/>
            <p>&copy; Recode Pro</p>
        </div>
    )
}

export default Rodape;