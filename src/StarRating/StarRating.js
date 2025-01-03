import React, { useState } from "react";

const StarRating = () => {
  const [currId, setCurrId] = useState(-1);
  const [clicked, setClicked] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center gap-4 h-full w-full text-white">
      <div className="text-3xl font-semibold">Please Rate</div>
      <div className="text-2xl flex items-center justify-center gap-4 flex-wrap w-[50%]">
        {[...Array(10)].map((_, index) => (
          <span
            key={index}
            className={`${
              index > currId ? "bi bi-star" : "bi bi-star-fill text-yellow-400"
            } cursor-pointer`}
            onMouseEnter={() => (!clicked ? setCurrId(index) : null)}
            onClick={() => (setCurrId(index), setClicked(true))}
            onMouseLeave={() => (!clicked ? setCurrId(index) : null)}
          ></span>
        ))}
      </div>
      <div
        className="bg-white text-black px-10 py-2 rounded-full shadow-lg font-bold cursor-pointer"
        onClick={() => (setClicked(false), setCurrId(-1))}
      >
        Edit 🔁
      </div>
    </div>
  );
};

export default StarRating;
