//import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react'
import Hero from './components/Hero';
//mport { renderMatches } from 'react-router';
import ErrorBoundry from './components/ErrorBoundry';
class App extends Component {
 render(){
  return (
    <div className="App">
      <h1> Understanding Error Boundries</h1>
      <ErrorBoundry>
      <Hero heroname={'batman'}/>
      </ErrorBoundry>
      <ErrorBoundry>
      <Hero heroname={'superman'}/>
      </ErrorBoundry>
      <ErrorBoundry>
     <Hero heroname={'joker'}/> 
     </ErrorBoundry>
     
      
    </div>
  );
 }
  
}

export default App;
