import produtos from './todosProdutos';

const initialState = produtos.map(item => ({...item}));

export default function(state = initialState, action){
    switch(action.type){
        case "ADICIONAR_NO_CARRINHO":
            alert(`${action.nome} adicionado ao carrinho.`);
            return state.map((item) => {
                item.id === action.id && item.qtd++;
                return item;
            })
        case "ACRESCENTAR_UNIDADE":
            return state.map((item) => {
                item.id === action.id && item.qtd++;
                return item;
            })
        case "REMOVER_UNIDADE":
            return state.map((item) => {
                item.id === action.id && item.qtd--;
                return item;
            })
        case "REMOVER_ITEM":
            return state.map((item) => {
                if(item.id === action.id)
                    item.qtd = 0;
                return item;
            })
        case "LIMPAR_CARRINHO":
            return state.map((item) => {
                item.qtd = 0;
                return item;
            })
        default:
            return state;
    }
}