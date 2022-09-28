import React,{useState,useReducer} from 'react'
import '../App.css'

const initialState=[{id: Date.now(),name:"Ayush",email:"ayus@gmail.com"}]

/*function reducer(state,action){
    switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
            default:
            throw new Error()
    }

}*/
function reducer(state,action){
    switch(action.type){
        case "add":
            return [...state,action.payload];
        case "delete":
            return state.filter(contact =>{
                return contact.id!== action.payload.id
            });
            default:
            throw new Error()
    }

}


function Reducer() {
    //const [counter,setCounter] = useState(0)
    const [state,dispatch] =useReducer(reducer,initialState);
    const [name,setName]=useState('') 
    const [email,setEmail]=useState('')
    console.log(state)
     /*  const increment =()=>{

    }
    const decrement =()=>{

    }*/
    const addToContact =(e)=>{
            e.preventDefault();
            const contact={
                id: Date.now(),
                name: name,
                email:email
            }
            setName('')
            setEmail('')
            dispatch({type:'add',payload:contact})
    }

  return (
    <>
     <div className='App'>
        <h1>useReducer hook</h1>
        <form onSubmit={ addToContact}>
            <div>
            <input type='text'
            placeholder='name'
            value={name}
            onChange={(e)=>setName(e.target.value)}>
                
            </input>
            </div>
            <div>
            <input type='email'
            placeholder='email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}>
            </input>
            <div>
            </div>
            
               <button>AddContact</button>
               </div>
        </form>
        <div>
            <ul>
               {state.map((contact)=>{
                return(
                   
                        <li key={contact.id}>
                        <h2>{contact.name}</h2>
                        <h2>{contact.email}</h2>
                        <div>
                            <button onClick={()=>dispatch({type:'delete',payload:{id:contact.id}})}>
                            delete</button>
                        </div>
                    </li>
                    
                    
                )
               })}
            </ul>
        </div>
      
       {/* // <button onClick={()=>dispatch({type: "increment"})}>Increment</button>
       <button onClick={()=>dispatch({type: "decrement"})}>Decrement</button> */}

        
        </div></>
   
  )
}

export default Reducer