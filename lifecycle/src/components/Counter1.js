import React from 'react'
import {useEffect,useState } from 'react'

function Counter1({number}) {
    /*
    // component didmount
    useEffect(()=>{
        console.log('component is mounted')

    },[])*/

    /*
    //component did update
    useEffect(()=>{
        console.log('component is updated')

    },[number])*/

    //component will unmount

    useEffect(()=>{
       
        return ()=>{
            console.log('component is unmounted')
        }

    },[number])



  return (
   <>
  <h1>{number} of times</h1>
   </>
  )
}

export default Counter1