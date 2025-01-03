import React, { useState, useEffect } from "react";

const RandomBgClrGenerator = () => {
  const [bgClr, setBgClr] = useState("#000000");
  const [typeCol, setTypeCol] = useState("HEX");

  useEffect(() => {
    if (typeCol === "HEX"){
      randClrGen()
    }
    else{
      randClrGenRGB()
    }
  }, [typeCol]);

  function randClrGen() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBgClr(randomColor);
  }

  function randClrGenRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${r}, ${g}, ${b})`;
    setBgClr(randomColor);
  }

  return (
    <div
      className={`h-full w-full flex flex-col items-center justify-center gap-4`}
      style={{
        backgroundColor: bgClr,
      }}
    >
      <div className="text-4xl text-white font-semibold text-center cursor-pointer">
        Random Color Generator
      </div>
      <div
        className="text-2xl p-4 bg-black text-white rounded-lg"
        // onClick={() => toggle()}
      >
        {bgClr}
      </div>
      <button
        className="bg-white px-6 p-2 rounded-full"
        onClick={() => (typeCol === "HEX" ? randClrGen() : randClrGenRGB())}
      >
        Generate<span className="bi bi-send ml-2"></span>
      </button>
      <div className="flex gap-4">
        <button className="bg-white px-6 p-2 rounded-full" onClick={() => setTypeCol("HEX")}>HEX</button>
        <button className="bg-white px-6 p-2 rounded-full" onClick={() => setTypeCol("RGB")}>RGB</button>
      </div>
    </div>
  );
};

export default RandomBgClrGenerator;
