import React, { useState } from "react";
import AccordionCard from "./AccordionCard";

const Accordion = () => {
  const data = {
    cardOpenNo: 4,
    cardsData: [
      {
        question: "Q1. What is your Name?",
        answer: "My Name is NishB",
      },
      {
        question: "Q2. What is your Age?",
        answer: "My Age is 20",
      },
      {
        question: "Q3. What is your Occupation?",
        answer: "I am a programmer",
      },
      {
        question: "Q4. What is your Favorite Color?",
        answer: "My Favorite Color is Blue",
      },
      {
        question: "Q5. What is your Hometown?",
        answer: "My Hometown is New York",
      },
    ],
  };

  const [openCardIndex, setOpenCardIndex] = useState(data.cardOpenNo - 1);

  return (
    <div className="h-full w-full flex items-center justify-center flex-col">
      <div className="text-2xl text-white font-semibold mb-4">Accordion</div>
      {data.cardsData.map((item, index) => (
        <AccordionCard
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={index === openCardIndex}
          onClick={() => setOpenCardIndex(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
