// just in index.js  render parent
import React,{useState,useCallback} from 'react'
import Child from './Child'



function Parent() {
    const [countOne,setCountOne]=useState(0)
    const [countTwo,setCountTwo] =useState(0)
//const [countTwo,setCountTwo]=useState(0)
const IncreOne=()=>{
  setCountOne(countOne+1)
 // setCountTwo(countTwo+1)
 
}
/*const IncreTwo=()=>{
    setCountTwo(countTwo+1)
   
  }*/
const check = useCallback(()=>{
    console.log('this is checking')
},[countTwo])
// without using callback when passing props to child comp. every time child component get render
//after using callback it will get render only when count2 get updated
//


  return (
    <>
     <h1>parnt call</h1>
    <Child  count2={countTwo} checkChild={check}/>

    <button onClick={IncreOne}> Counter1 - {countOne}</button>
     {/* <button onClick={IncreTwo}> Counter2 - {countTwo}</button> */}
     </>
   
  )
}

export default Parent