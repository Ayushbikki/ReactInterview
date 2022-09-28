//import logo from './logo.svg';
import './App.css';
import {useState,useMemo } from 'react'

//useMemo used

function App() {

  const [countOne,setCountOne]=useState(0)
  const [countTwo,setCountTwo]=useState(0)
  const IncreOne=()=>{
    setCountOne(countOne+1)
  }
  const IncreTwo=()=>{
    setCountTwo(countTwo+1)
  }
  const isOdd=useMemo(()=>{
    console.warn("...calling")
    let i=0;
    while(i<20000000) {
      i++;
    }
    //now it will get slow
    return countOne%2!==0

  },[countOne])

  return (
    <div className="App">

      <button onClick={IncreOne}> Counter1 - {countOne}</button>
      <span>{isOdd?"odd":"even"}</span>
      <button onClick={IncreTwo}> Counter2 - {countTwo}</button>
      
    </div>
  );
}

export default App;
