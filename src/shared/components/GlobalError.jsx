import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeErrors } from '../state/errorSlice'

const GlobalError = () => {
    let dispatch = useDispatch()
    let {error} = useSelector((store)=>store.error)

    if(!error) return null //abhi initially error ki value null .Ye condition check karti hai:“Kya error truthy hai?” Hamare pass case hai error = null . null ek falsy value hai so . if (error) // false, Condition FAIL. return null execute nahi hua. Matlab React neeche wala JSX render karega
    
    //ab mere ko chhaiye ki 5sec ke baad hate ye error toh setTimeOut laga sakte hai

    setTimeout(()=>{
      dispatch(removeErrors())
    },3000)

  return (
     <div className="absolute bottom-20 z-10 right-20">
      <h1 className="text-white text-6xl py-2 px-4 rounded bg-red-700 font-semibold">
        {error}
      </h1>
    </div>
  )
}

export default GlobalError
