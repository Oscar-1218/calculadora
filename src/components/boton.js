import '../style/boton.css'

function Boton(props){
    /*
    .trim() es una fn que quita el espacio vacio en una cadena de caracteres
    */
let esOperador = valor=>{
    return isNaN(valor) & (valor != '.' & (valor != '='))
}
    return(
        <div className={`boton-contenedor ${esOperador(props.children)?'operador': ''}`.trim()}
            onClick={() => props.manejarClick(props.children)}> 
            {props.children}
        </div>
    )
}
export default Boton
