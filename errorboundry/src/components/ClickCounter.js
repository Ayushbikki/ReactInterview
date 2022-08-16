import React from 'react'
import { useState } from 'react'


function ClickCounter() {
    const [count,setCount]=useState(0)
    const MAX_COUNT=5
const handle=()=>{
  try{
    if(count>MAX_COUNT){
      throw new Error('exceed its limit')
    }
    else
      setCount((count)=>count+1)
  }
  catch(e){
    console.log('click error ',e)
  }
  
}

  return (
    <>
    <button onClick={handle}> click {count} </button>
    </>
  )
}

export default ClickCounter