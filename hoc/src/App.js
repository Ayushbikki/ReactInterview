import './App.css';
import SearchTodos from './TodoList';
//import TodoList from './TodoList';
import SearchUsers from './UserList';
//import UserList from './UserList';

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign:'center'}}>HigherOrder Component</h1>
      <div className='section'>
        <div> <SearchUsers /></div>
        <div>   <SearchTodos /></div>
      </div>
    </div>
  );
}

export default App;
