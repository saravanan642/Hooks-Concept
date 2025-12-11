import React, { useState } from 'react';
import img1 from "../assests/pexels-nishantaneja-2362699.jpg";
import img2 from "../assests/pexels-philippedonn-1133957.jpg";
import Home from '../../UseState/Home';

function Increment() {
    const [add, setAdd] = useState(200);
    const [state, setState] = useState("Shankareshwari");
    const [color, setColor] = useState("bg-blue-500");
    let [sara, setSara] = useState("bg-red-600");


    const [image, setImage] = useState(img1);

    return (
        <div>
            <Home />
            <div className='flex  gap-[30px]'>
                <button onClick={() => setAdd(add - 20)} className=' border-black border-solid border-[2px]'> ADD button </button>
                <h2>Value: {add}</h2>
            </div>


            <button onDoubleClick={() => setState("saravanan")}>Click mee</button>
            <h2> Name:{state}</h2>

            <div className={`${color} p-4`}></div>
            <button onClick={() => setColor("bg-red-600")}>Color</button>


            <button onClick={() => setImage(img2)}>Change Image</button>


            <img src={image} alt="Selected" width="300" />

            <div className={`w-fit ml-[45%] p-[20px] ${sara} text-center`}>
                <button
                    onClick={() => setSara("bg-green-600")}
                    className="text-white"
                >
                    call mee
                </button>
            </div>


        </div>
    );
}

export default Increment;
