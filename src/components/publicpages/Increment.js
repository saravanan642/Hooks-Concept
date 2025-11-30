import React, { useState } from 'react';

function Increment() {

    const [add, setAdd] = useState(200);
    const [state, setState] = useState("Shankareshwari");
    const [color, setColor] = useState("bg-blue-500");

    return (
        <div>


            <button onClick={() => setAdd(add - 20)}> ADD button </button>
            <h2>Value: {add}</h2>


            <button onDoubleClick={() => setState("saravanan")}>Click mee</button>
            <h2>{state}</h2>


            <div className={`${color} p-4`}>
                 </div>
            <button onClick={() => setColor("bg-red-600")}>clor</button>


        </div>
    );
}

export default Increment;
