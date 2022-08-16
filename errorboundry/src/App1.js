import React from 'react'
import './App.css';
import ClickCounter from './components/ClickCounter';
import Person from './components/Person';
//import ErrorBoundry from './components/ErrorBoundry'
import { ErrorBoundry } from 'react-error-boundary'
import Fallback from './components/Fallback';

function App1() {
    const person={
        firstName: 'Ayush',
        lastName:'Kumar'
    }
    const errorHandler= ()=>{

    }
  return (
    <>
   <h1>Error Handling</h1>
   {/* <Person person1={person}/> */}
    {/* <ErrorBoundry  FallBackComponent={Fallback} onError={errorHandler}/> */}
    <ErrorBoundry >
    <Person person1={person}/>
   <ClickCounter />
    </ErrorBoundry>
   
  
   </>
   
  )
}

export default App1