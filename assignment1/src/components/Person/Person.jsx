import React from 'react'
import "./Person.css"

function Person({name, age}) {
  return (
    <>
    <div className='main-div'>
    <p>Your name is {name}</p>
    <p>Your age is {age}</p>

    </div>

    </>
  )
}

export default Person