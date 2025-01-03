import React from "react";

const AccordionCard = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="w-[75%] mb-4">
      <div
        className="accordionQues bg-gray-900 rounded-md flex items-center justify-between p-4 px-6 text-white"
        onClick={onClick} 
      >
        <div>{question}</div>
        <div
          className={`${
            isOpen ? "bi bi-dash-circle" : "bi bi-plus-circle"
          } cursor-pointer hover:scale-[1.1]`}
        ></div>
      </div>
      <div
        className={`accordionAns w-[99%] shadow-lg rounded-md bg-gray-700 h-auto items-center justify-between p-10 text-white ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {answer}
      </div>
    </div>
  );
};

export default AccordionCard;
