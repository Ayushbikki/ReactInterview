/*import React from "react";
import { useState,useEffect } from "react";

const TodoList = ()=>{
    const [todos,setTodos]= useState([])
    const [term,setTerm]= useState('')
    const fetchTodos= async()=>{
        const res=await fetch("https://jsonplaceholder.typicode.com/todos")
        const json = await res.json()
        setTodos(json)
        console.log(json)
    }
    useEffect(()=>{
        fetchTodos()
    },[])
    let renderTodos = todos.map((todo)=>{
        return(
            <div key={todo.id}>
                <p>
                    <strong>{todo.title}</strong>
                </p>
            </div>
        )
    })
    let filteredTodos= todos.slice(0,10).filter((todo)=>{
        return todo.title.toLowerCase().includes(term.toLowerCase())
    }).map((todo)=>{
        return(
           <div key={todo.id}>
                <p>
                    <strong>{todo.title}</strong>
                </p>
            </div> 
        )
    })
   
    
    return(
        <div>
            <h2>Tooslist are </h2>
            <input type='text' value={term} onChange={(e)=> setTerm(e.target.value)}></input>
           {filteredTodos}
        </div>
    )

}
export default TodoList;
*/
import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const TodoList = ({ data }) => {
  let renderTodos = data.slice(0,10).map((todo) => {
    return (
      <div key={todo.userId}>
        <p>
          <strong>{todo.title}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderTodos}</div>
    </div>
  );
};

const SearchTodos = HOC(TodoList, "todos");

export default SearchTodos;