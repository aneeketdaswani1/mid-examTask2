import React, { useState,useEffect } from 'react'

function Timer() {
    const [count,setCount] = useState(10)
    
    function handleChange(){
        setCount(count => count-1)
    }

    useEffect(()=>{
        let time1 = setTimeout(()=>{
                handleChange()
        },1000)
        if(count == 0){
            clearTimeout(time1)
        }
    })
  return (
    <div>
        <h1>{ count===0 ? <>Times up</> : count }</h1>
      
    </div>
  )
}

export default Timer
