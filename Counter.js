import React, { useState } from "react";

const Counter = () => {
  const [val, setVal] = useState(" ");
  const [color, setColor] = useState("white");
  const Inc = () => {
    console.log("clicked");
    if (val === " ")
    {
      setVal(1);
    }
    else {
      setVal(val + 1);
    }
  };
  const Dec = () => {
    console.log("clicked");
    setVal(val - 1);
    if (val <= 0) {
      setColor("red");
      alert('you reached zeroo!!');
      setVal(0);
    }
  };
  return (
    <div
      className="main-class"
      style={{ backgroundColor: val === 0 && "#FFCCCB" }}>
      <div className="value">
        <h1>{val && val}</h1>
      </div>
      <div className="btn">
        <button onClick={Inc} className="btna">
          <span> ➕</span>
        </button>

        <button onClick={Dec} className="btnd">
          <span>➖</span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
