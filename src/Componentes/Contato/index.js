export default function Comentarios(props){
    return(
        <tr>
            <td>{props.id}</td>
            <td>{props.nome}</td>
            <td>{props.comentario}</td>
        </tr>
    )
}