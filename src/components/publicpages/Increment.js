import React, { useState } from 'react';
import img1 from "../assests/pexels-nishantaneja-2362699.jpg";
import img2 from "../assests/pexels-philippedonn-1133957.jpg";
import Home from '../../UseState/Home';


function Increment() {
    const [add, setAdd] = useState(200);
    const [state, setState] = useState("pavinkumar");
    const [color, setColor] = useState("bg-blue-500");
    let [sara, setSara] = useState("bg-red-600");
    const [image, setImage] = useState(img1);

    return (
        <div>
            <div>
                <h1 className="text-3xl text-black mt-[50px] text-center" >"UseState Functional Demo Panel"</h1>
            </div>

            <div className=' border-4 border-black w-fit pr-[60px] pb-[30px] ml-[33%] mt-[4%] '>
                <Home />
                <div className='flex  gap-[40px] text-xl ml-[50px] '>
                    <button onClick={() => setAdd(add - 20)} className=' border-black border-solid border-[2px] p-[10px] bg-green-700 text-white'> ADD button </button>
                    <h2 className=' mt-[10px]'>Value: {add}</h2>
                </div>

                <div className='flex  gap-[10px] text-xl ml-[20px] '>
                    <button onDoubleClick={() => setState("saravanan")} className='m-[40px] p-[15px] border-black border-solid border-[2px]  text-white bg-orange-600'>Click mee</button>
                    <h2 className='mt-[55px] '> Name: {state}</h2>
                </div>

                <div className='flex  gap-[60px] text-3xl ml-[70px] '>
                    <button className='p-[5px] border-black border-solid border-[2px] bg-stone-900  text-white' onClick={() => setColor("bg-red-600")} >Color :</button>
                    <div className={`${color} w-[200px]`}></div>
                </div>


                <div className='gap-[60px] text-xl ml-[90px]  mt-[20px]' >
                    <button className=' border-black border-solid border-[2px] bg-zinc-800  text-white h-fit p-[20px] mt-[50px] ml-[50px]' onClick={() => setImage(img2)}>Change Image</button>
                    <img src={image} alt="Selected" className='w-[300px] h-[200px] mt-[30px]' />
                </div>
            </div>
        </div>
    );
}

export default Increment;
