import React, { useState } from 'react'
import { ChildTicTacToe } from '../HijoTicTacToe/ChildTicTacToe'

export const ComponentTicTac = () => {
    const [xIsnext,setXIsnext]=useState(true)

    const [square,setSquare]=useState(Array(9).fill(null))

  
    const handleClick=(i)=>{
         
        if (square[i] || calculateWinner(square)) {
            return;
        }



        if(square[i]){
            return;
        }

        const   SigCuadrado = square.slice();
        if(xIsnext){

            SigCuadrado[i]= 'x';

        }else{
            SigCuadrado[i]='0'
        }
        setSquare(SigCuadrado)
        setXIsnext(!xIsnext)

       

}





function calculateWinner(square) {

    const winner = calculateWinnerHelper(square);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsnext ? 'X' : 'O');
    }
     const lines = [
       [0, 1, 2],
       [3, 4, 5],
       [6, 7, 8],
       [0, 3, 6],
       [1, 4, 7],
       [2, 5, 8],
       [0, 4, 8],
       [2, 4, 6]
     ];

     for (let i = 0; i < lines.length; i++) {

         const [a, b, c] = lines[i];
         if (square[a] && square[a] === square[b] && square[a] === square[c]) {
           return square[a];
         }
       }
    }

    function calculateWinnerHelper(squares) {
        // Esta función auxiliar tiene un nombre diferente para evitar la recursión infinita
        // y se utiliza para almacenar el resultado de calculateWinner
        // y no llamar a la función dentro de sí misma.
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
        }
        return null;
      }

    

  return (

    <div className='flex flex-col justify-center '>

        <span>
        Juego de tres en raya React
        </span>
        <span> Ganador  </span>

        <div className='flex justify-center  w-[140px] flex-wrap ml-[170px]'>

        <ChildTicTacToe value={square[0]} onhandleClick={()=>handleClick(0)}  />
        <ChildTicTacToe value={square[1]} onhandleClick={()=>handleClick(1)}/>
        <ChildTicTacToe value={square[2]} onhandleClick={()=>handleClick(2)} />

        <ChildTicTacToe value={square[3]} onhandleClick={()=>handleClick(3)}/>
        <ChildTicTacToe value={square[4]} onhandleClick={()=>handleClick(4)}/>
        <ChildTicTacToe value={square[5]} onhandleClick={()=>handleClick(5)}/>

        <ChildTicTacToe value={square[6]} onhandleClick={()=>handleClick(6)}/>
        <ChildTicTacToe value={square[7]} onhandleClick={()=>handleClick(7)}/>
        <ChildTicTacToe value={square[8]} onhandleClick={()=>handleClick(8)}/>

     

        </div>


    </div>
  )
  //pasas a crear un array con 9 elementos y con valor null a cada uno de ellos.
  //luego despues de haber creado el array, creo  una constante dentro de mi funcion handleClik,  que va contener una copia de del array donde le voy a pasar el estado con el valor del array de 9 elementos.

//   3)..ahora vamos a actualizar el estado de la funcion handleclick porque recibe solo x con su valor cero el cuadrado de la esquina superioir izquierda, ahora lo vamos hacer con todo los demas agregando i a la funcion handleclick que toma el indice del curadrado a actualizar.
// 4.0 A este nivel cuando le paso i ya estoy super avanzado. porque ahora cualquier curadrado vale x, y recuerda que se gurada en el stado.
// ahora toca dos cosas, pasar el turno al siguiente jugador, y determinar el ganador, 
// para determinar el ganador necesitas saber todas las posibles conbinaciones .
// y una funcion para determinar al siguiente jugador.
// ------------------------------------------------------------------------------------------------->


}
