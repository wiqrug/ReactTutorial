import {useState} from 'react';


function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("x");
  }

  return (
    <button
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}

export default function Board() {

  //useState() call declares a squares state variable  that's initally set to the array that i created

  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
    
      <div className="board-row">
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
      <div className="board-row">
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
      <div className="board-row">
        <Square ></Square>
        <Square ></Square>
        <Square ></Square>
      </div>
    </>


  );
}
