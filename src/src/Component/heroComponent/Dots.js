import React from 'react'
import './dots.css'


const Dots=(props)=>{
  const dotIDs = [0,1,2]
  const renderDots = dotIDs => {
     return dotIDs.map((dotID,index)=>{
       return (
         <li key={index} value={dotID} className={props.value===dotID?'dot active':'dot'}></li>
      )
   })
   }
  
   return (
     <ul className='dots'>
       {renderDots(dotIDs)}
     </ul>
   )
}

export default Dots
