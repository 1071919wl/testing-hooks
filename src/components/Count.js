import React, {useState} from 'react'
import countHook from '../hooks/usePenis'


function Count() {

  const [count, increment, decrement, reset] = countHook(0, 1)


    return (
      <div>
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
  );
}

export default Count;
