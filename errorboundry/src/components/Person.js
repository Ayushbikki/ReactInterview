import React from 'react'

export default function Person({person1}) {
  return (
   <>
   <h4>{person1.firstName}</h4>
   <h4>{person1.lastName}</h4>
   </>
  )
}
