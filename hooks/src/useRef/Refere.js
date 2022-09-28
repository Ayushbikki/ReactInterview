import React,{useState,useRef,useEffect} from 'react'
import '../App.css'
// here what we trying when we click reset button along with clear name focus must be shifted on input field and for that we need to get access of input field
function Refere() {
    /*
    1.Dom reference
    2. usedRef for storing the previous state
    3. holds mutable value prevents  re-render  of component



    */
    const[name,setName]=useState('')
    const[counter,setCounter]=useState(0)
    //whenever counter updates it get rerender and to hold the value of prevState
   // cso for this use useRef
   const prevCounterRef= useRef('')

    const inputE1=useRef('') // returns a object and this object has property acurrent
    console.log(inputE1)

    const resetInput=()=>{
        setName('')
        inputE1.current.focus()
        console.log(inputE1.current.value)
      //  inputE1.current.value=''
    }
    useEffect(()=>{

        prevCounterRef.current=counter
        console.log('counter is',prevCounterRef.current)

    },[counter])
  return (
    <>
    <div className='App'>
        <div style={{margin:"50px"}}>
            <input name='name' 
            ref={inputE1} 
            placeholder='using useState'autoComplete='off' type='text' value={name} 
            onChange={(e)=>setName(e.target.value)}>
            </input>
            <button onClick={resetInput}>Reset</button>
            
        </div>
        <h1>My name is {name}</h1>
        {/* <div>
        <input name='name'  placeholder='using useState'autoComplete='off' type='text' ref={inputE1} />
        <button onClick={resetInput}>Reset</button>
     
        </div> */}
        <div>
            <h1>Random Counter {counter}</h1>
          {typeof prevCounterRef!== 'undefined' && (<h1>Previous count is {prevCounterRef.current}</h1>)} 
            <button onClick={(e)=>setCounter(Math.floor(Math.random()*100))}>counter</button>
        </div>
       
      

    </div>
    </>
  );
   
}

export default Refere
