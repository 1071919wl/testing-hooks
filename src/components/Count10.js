import React, {useState, useEffect} from 'react';


function Count10() {
  const [count, setCount] = useState(10);

  function increment(){
    setCount(count+10)
  }

  function decrement(){
    setCount(count-10)
  }

  function reset(){
    setCount(10)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>

    </div>
  );
}

export default Count10;
