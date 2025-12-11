import { useState } from "react";

const Home = () => {


  const [multiple, setmultiple] = useState(20);
  return (
    <div className="p-[20px] m-[30px] text-xl gap-[20px] flex ">
      
      <button className='border border-solid  bg-red-600 p-[20px]' onDoubleClick={() => setmultiple(multiple * 50)}>Click mee</button>
      <h1 className="mt-[20px]">Multiple :{multiple}</h1>

    </div>
  )
}
export default Home;