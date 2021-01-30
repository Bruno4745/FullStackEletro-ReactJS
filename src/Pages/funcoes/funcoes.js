function exibir_categoria(categoria){

    let elementos = document.getElementsByClassName('produto_unidade');

    for(let i=0; i <= elementos.length; i++){
        if(elementos[i].id == categoria || categoria == 'todos'){
            elementos[i].style = "display:inline-block";
        }
        else{
            elementos[i].style = "display:none";
        }
    }
}

export default exibir_categoria;