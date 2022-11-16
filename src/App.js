/*
  TRABAJAR EN LA NO REPETICION DE SIGNOS Y BORRAR VALOR, SI LUEGO DE PRESIONAR IGUAL, NO DESEO SEGUIR SOBREESCRIBIENDO
  ESE NUMERO. lUEGO A GITHUB
*/
import './App.css';
import img from './images/milogo.png'
import Boton from './components/boton';
import Pantalla from './components/pantalla';
import {useState} from 'react';
import {evaluate} from 'mathjs' //a partir de una expre con simbolos, realiza una operacion matematica

function App() {

    let [input,setInput] = useState('');

    let agregarInput = valor => {
      setInput(input + valor);
      console.log(input,valor)
    }

    
    let calcularResultado =()=>{
      if(input){
        setInput(evaluate(input))
      }
    }

  return (
    <div className='App'>
      <div className='container-logoDeFcc'>
        <img src={img} className='logo'/>
      </div>      
      <header className='App-header'>
        <div className='contenedor-calculadora'>
          
          <Pantalla input={input} />
          <div className='fila'>
            <Boton manejarClick={agregarInput}>1</Boton>
            <Boton manejarClick={agregarInput}>2</Boton>
            <Boton manejarClick={agregarInput}>3</Boton>
            <Boton manejarClick={agregarInput}>+</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>4</Boton>
            <Boton manejarClick={agregarInput}>5</Boton>
            <Boton manejarClick={agregarInput}>6</Boton>
            <Boton manejarClick={agregarInput}>-</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>7</Boton>
            <Boton manejarClick={agregarInput}>8</Boton>
            <Boton manejarClick={agregarInput}>9</Boton>
            <Boton manejarClick={agregarInput}>*</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={agregarInput}>0</Boton>
            <Boton manejarClick={agregarInput}>.</Boton>
            <Boton manejarClick={calcularResultado}>=</Boton>
            <Boton manejarClick={agregarInput}>/</Boton>
          </div>
          <div className='fila'>
            <Boton manejarClick={()=>{setInput('')}} >Borrar</Boton>

          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
