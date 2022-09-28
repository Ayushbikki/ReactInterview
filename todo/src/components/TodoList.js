import React from 'react'

const TodoList =({does}) => {
   console.log('todoes',does)
    
  return (
    <>
    <span>
   {does.map((ele,i)=>{
   return<>
   <li>{ele}</li>
   <button>delete</button>
   </> 


   })}
   
    </span>
    </>
    
   

  )
}

export default TodoList