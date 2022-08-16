import React from 'react'

function Hero({heroname}) {
    if(heroname==='joker'){
        throw new Error('not a hero')
    }
  return (
    <h4>{heroname}</h4>
    
  )
}

export default Hero