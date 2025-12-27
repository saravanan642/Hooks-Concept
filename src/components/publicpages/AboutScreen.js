import React, { useContext } from 'react'
import { DContext } from '../../store/DataProvider'
export const AboutScreen = () => {
   const {sra , numbers,myinfo} = useContext(DContext)
    console.log("screen view" , numbers)
  return (
    <div>
      <p>{sra.name}</p>
      <p>{sra.age}</p>
      <h1>{myinfo.name}</h1>
      

      <div>
        <h2>{numbers}</h2>
      </div>
    </div>
  )
}
