"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/app/hooks/useAuth";
import Button from "../Button";
import Input from "../Input";

type LoginProps = {
  onClose: () => void;
};

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const { login } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const petId = searchParams.get("adopt-req");

  return (
    <div className="p-[20px]">
      <div className="text-right">
        <button className="cursor-pointer mb-[25px]" onClick={onClose}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_16_1349)">
              <path
                d="M4.6875 3L3.26562 4.42188L11.1875 12.3438L3.21875 20.3281L4.625 21.7344L12.6094 13.7656L20.5781 21.7344L22 20.3125L14.0312 12.3438L21.9531 4.42188L20.5312 3L12.6094 10.9219L4.6875 3Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_1349">
                <rect width="25" height="24.7344" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <h2 className="text-lavander subheading text-center mb-[25px]">
        Bienvenido a PawGo
      </h2>
      <Input
        id="email"
        className="max-w-[320px] mx-auto mb-[18px]"
        label="Email"
        placeholder="Correo electrónico"
      />
      <Input
        id="password"
        className="max-w-[320px] mx-auto mb-[19px]"
        label="Contraseña"
        placeholder="Escribe tu contraseña"
      />
      <div className="text-center mb-[25px]">
        <Button
          onClick={() => {
            login();
            onClose();
            router.push(petId ? `/solicitudes?id=${petId}` : "/mi-cuenta");
          }}
          size="sm"
        >
          Iniciar sesión
        </Button>
      </div>
      <hr className="max-w-[380px] mx-auto mb-[25px]" />
      <p className="text-center body-sm mb-[25px]">O conéctate con:</p>
      <button className="flex w-full max-w-[378px] rounded-[9px] border mx-auto px-[15px] py-[10px] justify-between items-center mb-[10px]">
        <div>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_16_1383)">
              <path
                d="M15.9213 14.5256C15.6619 15.1249 15.3548 15.6765 14.999 16.1837C14.5141 16.8751 14.117 17.3537 13.811 17.6194C13.3367 18.0557 12.8284 18.2791 12.2842 18.2918C11.8935 18.2918 11.4223 18.1806 10.8739 17.9551C10.3236 17.7306 9.8179 17.6194 9.35551 17.6194C8.87057 17.6194 8.35047 17.7306 7.79417 17.9551C7.23701 18.1806 6.78818 18.2981 6.44501 18.3098C5.92312 18.332 5.40292 18.1023 4.88367 17.6194C4.55226 17.3304 4.13773 16.8349 3.64114 16.1329C3.10834 15.3832 2.67031 14.5139 2.32714 13.5229C1.95963 12.4524 1.77539 11.4158 1.77539 10.4122C1.77539 9.26268 2.02379 8.27119 2.52133 7.44034C2.91236 6.77296 3.43256 6.24651 4.08363 5.86004C4.7347 5.47357 5.43818 5.27663 6.19577 5.26403C6.6103 5.26403 7.1539 5.39225 7.82943 5.64425C8.50305 5.8971 8.93558 6.02532 9.12521 6.02532C9.26699 6.02532 9.74748 5.87539 10.562 5.57649C11.3323 5.29929 11.9824 5.18451 12.515 5.22972C13.9582 5.34619 15.0424 5.9151 15.7635 6.94004C14.4728 7.72209 13.8343 8.81744 13.847 10.2226C13.8587 11.3171 14.2557 12.2279 15.0361 12.9511C15.3897 13.2867 15.7847 13.5461 16.2241 13.7304C16.1288 14.0067 16.0282 14.2714 15.9213 14.5256ZM12.6114 1.50097C12.6114 2.35883 12.298 3.15983 11.6733 3.90122C10.9194 4.78258 10.0075 5.29188 9.0187 5.21151C9.00545 5.10367 8.99881 4.99511 8.99879 4.88645C8.99879 4.0629 9.35731 3.18154 9.99398 2.4609C10.3118 2.09603 10.7161 1.79268 11.2063 1.55063C11.6955 1.31218 12.1582 1.18036 12.5934 1.15781C12.6061 1.27248 12.6114 1.38725 12.6114 1.50097Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_1383">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0 0.734375)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        Conéctate con Apple
      </button>
      <button className="flex w-full max-w-[378px] rounded-[9px] border mx-auto px-[15px] py-[10px] justify-between items-center mb-[10px]">
        <div>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_16_1398)">
              <path
                d="M18 9.73436C17.9996 8.01441 17.5063 6.3306 16.5787 4.88227C15.651 3.43395 14.3277 2.28178 12.7656 1.56216C11.2034 0.842541 9.46772 0.58562 7.76407 0.821814C6.06041 1.05801 4.46011 1.77743 3.15263 2.89489C1.84515 4.01235 0.885254 5.48107 0.386581 7.12714C-0.112091 8.77321 -0.128653 10.5277 0.338858 12.1829C0.806368 13.8381 1.73837 15.3247 3.02452 16.4666C4.31067 17.6086 5.89711 18.358 7.596 18.6264V12.3354H5.31V9.73436H7.596V7.75436C7.596 5.50436 8.937 4.24436 10.989 4.24436C11.979 4.24436 13.005 4.42436 13.005 4.42436V6.63836H11.88C10.764 6.63836 10.413 7.33136 10.413 8.04236V9.73436H12.915L12.51 12.3444H10.413V18.6264C12.5291 18.29 14.4557 17.2096 15.8465 15.5797C17.2373 13.9497 18.0009 11.877 18 9.73436Z"
                fill="#0D4599"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_1398">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0 0.734375)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        Conéctate con Facebook
      </button>
      <button className="flex w-full max-w-[378px] rounded-[9px] border mx-auto px-[15px] py-[10px] justify-between items-center">
        <div>
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_16_1401)">
              <path
                d="M8.99996 4.29688C10.3275 4.29688 11.5162 4.75437 12.4537 5.64688L15.0225 3.07812C13.4625 1.62688 11.4262 0.734375 8.99996 0.734375C5.48246 0.734375 2.44121 2.75187 0.959961 5.69187L3.95246 8.01312C4.66121 5.87937 6.65246 4.29688 8.99996 4.29688Z"
                fill="#EA4335"
              />
              <path
                d="M17.6175 9.94062C17.6175 9.35187 17.5612 8.78188 17.475 8.23438H9V11.6169H13.8525C13.635 12.7269 13.005 13.6719 12.06 14.3094L14.9588 16.5594C16.65 14.9919 17.6175 12.6744 17.6175 9.94062Z"
                fill="#4285F4"
              />
              <path
                d="M3.94875 11.4556C3.76875 10.9119 3.66375 10.3344 3.66375 9.73439C3.66375 9.13439 3.765 8.55689 3.94875 8.01314L0.95625 5.69189C0.345 6.90689 0 8.27939 0 9.73439C0 11.1894 0.345 12.5619 0.96 13.7769L3.94875 11.4556Z"
                fill="#FBBC05"
              />
              <path
                d="M8.99981 18.7344C11.4298 18.7344 13.4736 17.9357 14.9586 16.5557L12.0598 14.3057C11.2536 14.8494 10.2148 15.1682 8.99981 15.1682C6.6523 15.1682 4.66105 13.5857 3.94855 11.4519L0.956055 13.7732C2.44105 16.7169 5.48231 18.7344 8.99981 18.7344Z"
                fill="#34A853"
              />
            </g>
            <defs>
              <clipPath id="clip0_16_1401">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0 0.734375)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        Conéctate con Facebook
      </button>
    </div>
  );
};

export default Login;
