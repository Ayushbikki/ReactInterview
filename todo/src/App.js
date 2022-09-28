//import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import TodoList from './components/TodoList';

function App() {
  const [inputList,setInputList] = useState('')
      const [todo,setTodo]= useState([])

      const itemEvent =(e)=>{
        setInputList(e.target.value)

      }
      const listOfTodo =() =>{
        setTodo((oldTodo) =>{
            return [...oldTodo,inputList]
        })
        setInputList("")
      }
      console.log(todo)
      console.log('in',inputList)
  return (
    <div className="App">
      <div className='container'>
       <h1>TodoApp</h1>
       {/* <input type='text' placeholder='add a todo' value={inputList} onChange={itemEvent}></input>
       <button onClick={listOfTodo}>Submit</button>
        <TodoList does={todo} /> */}
        <form className='todoForm'>
          <input type="text"></input>
          <button>Go</button>
        </form>
        <ul>
          <li>
            <span>Learn React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
          <span>Learn JavaScript</span>
            <button>Edit</button>
            <button>Delete</button>
        </ul>
        </div>
    </div>
  );
}

export default App;
