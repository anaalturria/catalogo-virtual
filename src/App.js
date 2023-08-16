
import BoasVindas from './components/BoasVindas';
import Contador from './components/Contador';
import ExibeNota from './components/Exibenota';
import { useState } from 'react';

function App(props) {

  

  let nota = props.nota;
  let aprovado = false;
  let reprovado = false; 
  if( nota > 5){
    aprovado = true;
  } else {
    reprovado = true;
  }



  return (
    <>
    { aprovado && 
      <ExibeNota mensagem="Aprovado" nota={props.nota} />
    }
    { reprovado && 
      <ExibeNota mensagem="Reprovado" nota={props.nota} />
    }
    <Contador></Contador>
    <BoasVindas></BoasVindas>

    </>
  );
}

export default App;
