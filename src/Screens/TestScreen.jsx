import React from 'react'
import { increment, decrement, incrementByAmount } from '../Redux/CounterSlice'
import { selectCamera, selectMicrophone, selectSpeaker,  Minus, addByValue } from '../Redux/Settings'
import { useSelector, useDispatch } from 'react-redux'

function TestScreen() {
    const storeDatacounter = useSelector((item)=>{return(item.counter.value)})
    const storeData = useSelector((item)=>{return(item.settings)})
    console.log(storeData)
    const dispatch = useDispatch()
  return (
    <>
    <div>
        <h1>This is the Test Screen To Test the Components</h1>
        <div><h1>{storeDatacounter}</h1></div>
        {/* <div>{storeData}</div> */}
        <div>
            <button onClick={()=>{dispatch(selectCamera())}}>Camera</button>
            <button onClick={()=>{dispatch(selectMicrophone())}}>Microphone</button>
            <button onClick={()=>{dispatch(selectSpeaker())}}>Speaker</button>
            <button onClick={()=>{dispatch(Minus())}}>Speaker</button>
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
