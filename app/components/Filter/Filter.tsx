import React from "react";
import cn from "classnames";

type FilterProps = {
  text: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

const Filter: React.FC<FilterProps> = ({
  text,
  active,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-between gap-2 px-4 py-2 rounded-lg border transition-colors duration-200 text-gray-primary cursor-pointer",
        {
          "bg-lavander/10  border-lavander": active,
          "bg-white border-gray-primary hover:bg-gray-100": !active,
        },
        className
      )}
    >
      <span>{text}</span>
      <svg
        className="w-2 h-3 rotate-90" // rotate 90° to point down
        viewBox="0 0 8 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0)">
          <path
            d="M0.0117395 12.5274C-0.0205253 12.3518 0.0122958 12.1747 0.146362 12.0366L6.36957 6.51256L0.107977 0.922384C-0.235254 0.412841 0.297115 -0.168718 0.930173 0.0458517C3.2894 2.01447 5.53458 4.11332 7.85264 6.12929C8.01063 6.297 8.04178 6.53179 7.94665 6.73157C5.71871 8.82942 3.34614 10.8276 1.06368 12.8875C0.685406 13.1415 0.0873949 12.9413 0.0117395 12.5274Z"
            fill="#000000"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="13"
              height="8"
              fill="#000000"
              transform="translate(0 13) rotate(-90)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  );
};

export default Filter;
