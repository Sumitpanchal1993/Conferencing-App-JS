import React from 'react'
import { increment, decrement, incrementByAmount } from '../Redux/CounterSlice'
import { hardware, Minus, addByValue } from '../Redux/Settings'
import { useSelector, useDispatch } from 'react-redux'

function TestScreen() {
    const storeData = useSelector((item)=>{return(item.setting)})
    console.log(storeData)
    const dispatch = useDispatch()
  return (
    <>
    <div>
        <h1>This is the Test Screen To Test the Components</h1>
        {/* <div><h1>{storeData}</h1></div> */}
        <div>
            <button onClick={()=>{dispatch(increment())}}>Inc</button>
            <button onClick={()=>{dispatch(decrement())}}>Dec</button>
            <button onClick={()=>{dispatch(incrementByAmount(5))}}>Inc by Amt</button>
        </div>
        <div>
            <button onClick={()=>{dispatch(increment())}}>Inc</button>
            <button onClick={()=>{dispatch(decrement())}}>Dec</button>
            <button onClick={()=>{dispatch(incrementByAmount(5))}}>Inc by Amt</button>
        </div>
    </div>      
    </>
  )
}

export default TestScreen
