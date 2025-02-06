import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './features/counter/counterSlice';

function IncrementDecrement() {

    const [inputVal, setInputVal] = useState(0)

    const count = useSelector((state) => state.counter.value ?? 0);
  const dispatch = useDispatch(); 
  return (
    <div>
      <button onClick={()=> dispatch(increment())}>+</button>
      <br />
      <br />
      count: {count}
      <br /> 
      <br /> 
      <button onClick={()=> dispatch(decrement())}>-</button>
      <br />
      <br />
      <input type="number" name=""  onChange={(e)=> setInputVal(+e.target.value)}/>
      <br />
      <br />
      <button onClick={()=> dispatch(incrementByAmount(inputVal))}>By value</button>
    </div>
  )
}

export default IncrementDecrement
