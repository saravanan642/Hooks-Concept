

import React, { useState } from 'react';

function Increment() {

  const [add, setAdd] = useState(200);  

  console.log("Default", add);

  
  const [state, setstate] = useState("Shankareshwari");
  console.log ("Default ", state);

  


  

  return (
    <div>
      <button onClick={() => setAdd(add - 20)}> ADD button </button> 
      <h2>Value: {add}</h2>


      <button onDoubleClick={()=>setstate("saravanan")} >Click mee</button>
      <h2> {state}</h2>
    </div>

    
  );
}

export default Increment;  
