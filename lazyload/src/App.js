//import logo from './logo.svg';
import './App.css';
import { lazy,Suspense } from 'react'

const Heavy= lazy(()=> import('./components/heavy-component'))

function App() {
  return (
    <div className="App">
      <div> Hello World</div>
    <Suspense fallback={<div>Loading... </div>} >
        <Heavy />
      </Suspense> 
    
     
    </div>
  );
}

export default App;
