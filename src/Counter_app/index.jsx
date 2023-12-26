import React, { useState } from 'react'

export default function CounterApp() {
    let [number, setState] = useState(0)
    let handleIncrement = () => {
        setState(number+1)
    }
    let handleDecrement = () => {
        setState(number-1)
    }
    let handleReset = () => {
        setState(number=0)
    }
  return (
    <div className="allContent">
        <div className="heading">
            <h1>Counter App</h1>
          </div>
          <div className="content">
              <h3>Count: { number}</h3>
              <div className="btn">
              <button onClick={handleIncrement} disabled={number === 5}>+</button>
               <button onClick={handleDecrement} disabled={number === -5}>-</button>
               <button onClick={handleReset}>Reset</button>
              </div>
          </div>
    </div>
  )
}
