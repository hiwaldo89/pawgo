import cn from "classnames";
import { useMemo } from "react";

type PaginationProps = {
  totalPages: number;
  current: number;
  onNext: () => void;
  onPrev: () => void;
  onPageClick: (page: number) => void;
  className?: string;
};

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  current,
  onNext,
  onPrev,
  onPageClick,
  className,
}) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const pageRange = useMemo(() => {
    const delta = 2;
    const range: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || // primera página
        i === totalPages || // última página
        (i >= current - delta && i <= current + delta) // alrededor del current
      ) {
        range.push(i);
      } else if (range[range.length - 1] !== "...") {
        range.push("...");
      }
    }

    return range;
  }, [totalPages, current]);

  return (
    <div className={cn("flex gap-[4px]", className)}>
      {current > 1 && (
        <button
          className="w-[30px] h-[30px] rounded-[6px] bg-lavander flex items-center justify-center cursor-pointer"
          onClick={onPrev}
        >
          <svg
            className={`w-2 h-3 transform rotate-180`} // rota 180° para apuntar a la izquierda
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M0.0117395 12.5274C-0.0205253 12.3518 0.0122958 12.1747 0.146362 12.0366L6.36957 6.51256L0.107977 0.922384C-0.235254 0.412841 0.297115 -0.168718 0.930173 0.0458517C3.2894 2.01447 5.53458 4.11332 7.85264 6.12929C8.01063 6.297 8.04178 6.53179 7.94665 6.73157C5.71871 8.82942 3.34614 10.8276 1.06368 12.8875C0.685406 13.1415 0.0873949 12.9413 0.0117395 12.5274Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="13"
                  height="8"
                  fill="white"
                  transform="translate(0 13) rotate(-90)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
      {pageRange.map((page, index) =>
        page === "..." ? (
          <span key={`page-${index}`}>{page}</span>
        ) : (
          <button
            key={`page-${index}`}
            className={cn(
              "w-[30px] h-[30px] rounded-[6px] border cursor-pointer",
              {
                "bg-lavander/20 border-lavander": current === page,
                "bg-white": current !== page,
              }
            )}
            onClick={() => onPageClick(page as number)}
          >
            {page}
          </button>
        )
      )}
      {current < totalPages && (
        <button
          className="w-[30px] h-[30px] rounded-[6px] bg-lavander flex items-center justify-center cursor-pointer"
          onClick={onNext}
        >
          <svg
            className="w-2 h-3"
            viewBox="0 0 8 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M0.0117395 12.5274C-0.0205253 12.3518 0.0122958 12.1747 0.146362 12.0366L6.36957 6.51256L0.107977 0.922384C-0.235254 0.412841 0.297115 -0.168718 0.930173 0.0458517C3.2894 2.01447 5.53458 4.11332 7.85264 6.12929C8.01063 6.297 8.04178 6.53179 7.94665 6.73157C5.71871 8.82942 3.34614 10.8276 1.06368 12.8875C0.685406 13.1415 0.0873949 12.9413 0.0117395 12.5274Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="13"
                  height="8"
                  fill="white"
                  transform="translate(0 13) rotate(-90)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
