import React, { useState } from "react";

const Sample = () => {
  const [weight, setWeight] = useState(300);

  return (
    <div className="mt-[40px] ml-[90px]">
      <button className=" border-black border-solid border-[2px] ml-[5%] p-[1%] bg-cyan-500"
        onClick={() => setWeight(800)}
        style={{ fontWeight: weight }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Sample;
