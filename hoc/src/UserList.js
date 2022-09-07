/*import React from "react";
import { useState,useEffect } from "react";

const UserList = ()=>{
    const [users,setUsers]= useState([])
    const [term,setTerm]= useState('')
    const fetchUser= async()=>{
        const res=await fetch("https://jsonplaceholder.typicode.com/users")
        const json = await res.json();
        setUsers(json)
        console.log(json)
    }
    useEffect(()=>{
        fetchUser()
    },[])
    let renderUsers = users.map((user)=>{
        return(
            <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div>
        )
    })
    let filteredUsers= users.filter((user)=>{
        return user.name.toLowerCase().includes(term.toLowerCase())
    }).map((user)=>{
        return(
           <div key={user.id}>
                <p>
                    <strong>{user.name}</strong>
                </p>
            </div> 
        )
    })
   
    
    return(
        <div>
            <h2>Userlist are </h2>
            <input type='text' value={term} onChange={(e)=> setTerm(e.target.value)}></input>
           {filteredUsers}
        </div>
    )

}
export default UserList;*/
//using HOC
import React, { useEffect, useState } from "react";
import HOC from "./HOC";

const UsersList = ({ data }) => {
  let renderUsers = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });
  return (
    <div>
      <div>{renderUsers}</div>
    </div>
  );
};

const SearchUsers = HOC(UsersList, "users");

export default SearchUsers;