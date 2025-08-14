"use client";

import { useState } from "react";

type AccordionProps = {
  question: string;
  answer: React.ReactNode | (() => React.ReactNode);
  isOpen: boolean;
  onClick: () => void;
};

const Accordion: React.FC<AccordionProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  const renderAnswer = typeof answer === "function" ? answer() : answer;

  return (
    <div className="border-b border-gray-200 w-full bg-white p-[25px] rounded-[18px] border border-gray-primary">
      <button
        className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="subheading2">{question}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
          />
        </svg>
      </button>

      {isOpen && <div className="pb-4 body">{renderAnswer}</div>}
    </div>
  );
};

export default Accordion;
