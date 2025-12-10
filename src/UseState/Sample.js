import React, { useState } from "react";

const Sample = () => {
  const [weight, setWeight] = useState(300);

  return (
    <div>
      <button
        onClick={() => setWeight(800)}
        style={{ fontWeight: weight }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Sample;
