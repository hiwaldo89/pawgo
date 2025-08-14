import Button from "../Button";
import Filter from "../Filter/Filter";

const availableFilters = [
  { id: "type", text: "Perros", active: true },
  { id: "age", text: "Cachorro", active: true, className: "lg:hidden xl:flex" },
  { id: "gender", text: "Género", active: false },
  {
    id: "breed",
    text: "Raza",
    active: false,
    className: "hidden xl:flex",
  },
  { id: "more", text: "Más filtros", active: false },
];

const Filters = () => {
  return (
    <div className="bg-white drop-shadow-md py-[25px] px-[20px] rounded-[18px] flex flex-col lg:flex-row lg:justify-between">
      <div className="border border-gray-primary rounded-[9px] inline-flex mb-[15px] lg:mb-0">
        <input
          className="w-[240px] body-sm px-[10px] py-[8px]"
          placeholder="Dirección, Ciudad, Código postal"
        />
        <button className="ml-[27px] cursor-pointer mr-[10px]">
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_13_247)">
              <path
                d="M6.47646 0.5C6.63258 0.545651 6.81765 0.538712 6.98081 0.562086C9.12417 0.869594 10.9846 2.30889 11.7093 4.21091C12.4077 6.04354 12.0696 8.04709 10.8113 9.58572L14.8191 13.3353C15.3903 14.0227 14.4935 14.8638 13.7521 14.332L9.7365 10.5893C8.10218 11.7598 5.95178 12.0794 4.00209 11.4355C2.10014 10.807 0.632502 9.27858 0.167285 7.44412L0.00686598 6.56908C0.0221254 6.28275 -0.0138712 5.97853 0.00686598 5.6944C0.203673 2.99074 2.66826 0.691371 5.56912 0.5H6.47646ZM10.566 6.13229C10.566 3.79676 8.53844 1.90351 6.03746 1.90351C3.53649 1.90351 1.50894 3.79676 1.50894 6.13229C1.50894 8.46781 3.53649 10.3611 6.03746 10.3611C8.53844 10.3611 10.566 8.46781 10.566 6.13229Z"
                fill="black"
              />
              <path
                d="M6.03725 10.3611C8.53829 10.3611 10.5658 8.46777 10.5658 6.13228C10.5658 3.79679 8.53829 1.90351 6.03725 1.90351C3.53622 1.90351 1.50873 3.79679 1.50873 6.13228C1.50873 8.46777 3.53622 10.3611 6.03725 10.3611Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_13_247">
                <rect
                  width="15"
                  height="14"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="grid grid-flow-row lg:grid-flow-col lg:auto-cols-auto gap-[15px] lg:ml-auto lg:mr-[15px]">
        {availableFilters.map(({ id, ...props }) => (
          <Filter key={id} {...props} />
        ))}
      </div>
      <Button variant="secondary" size="sm" className="mt-[15px] lg:mt-0">
        Guardar búsqueda
      </Button>
    </div>
  );
};

export default Filters;
