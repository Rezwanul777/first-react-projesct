import React, { useState } from 'react';

const Test = (props) => {
   const[count,setCount]=useState(0)
    
   const plus=()=>{
       setCount(count+1)
   }

   const minus=()=>{
       setCount(count-1)
   }

    return (
        <div>
            <h1>{count}</h1>
           <button onClick={plus}  className='btn btn-primary p-2 m-2'>+</button>
           <button onClick={minus} className='btn btn-danger p-2 m-2'>-</button>
        </div>
    );
};

export default Test;