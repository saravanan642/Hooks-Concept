import React, { useState } from 'react';
import img1 from "../assests/pexels-nishantaneja-2362699.jpg";
import img2 from "../assests/pexels-philippedonn-1133957.jpg";

function Increment() {
    const [add, setAdd] = useState(200);
    const [state, setState] = useState("Shankareshwari");
    const [color, setColor] = useState("bg-blue-500");
    
    
    const [image, setImage] = useState(img1);

    return (
        <div>

            <button onClick={() => setAdd(add - 20)}> ADD button </button>
            <h2>Value: {add}</h2>

            <button onDoubleClick={() => setState("saravanan")}>Click mee</button>
            <h2>{state}</h2>

            <div className={`${color} p-4`}></div>
            <button onClick={() => setColor("bg-red-600")}>Color</button>

            
            <button onClick={() => setImage(img2)}>Change Image</button>

            
            <img src={image} alt="Selected" width="300" />
        </div>
    );
}

export default Increment;
