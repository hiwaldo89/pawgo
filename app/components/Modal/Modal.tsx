"use client";

import { useEffect } from "react";
import cn from "classnames";
import { useModal } from "@/app/hooks/useModal";
import Login from "../Login";
import PetProfile from "../PetProfile";

type ModalProps = {
  isOpen: boolean;
  onClose?: () => void;
  size?: "sm" | "lg";
};

const Modal: React.FC = () => {
  const { modalType, closeModal } = useModal();

  useEffect(() => {
    document.body.style.overflow = !!modalType ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalType]);

  if (!modalType) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 overflow-auto p-4"
      onClick={closeModal} // overlay click closes modal
    >
      <div className="grid place-items-center min-h-screen w-full">
        <div
          className={cn("bg-white rounded-[18px] w-full mx-auto", {
            "max-w-[1030px]": modalType === "petDetails",
            "max-w-[580px]": modalType === "login",
          })}
          onClick={(e) => e.stopPropagation()} // only stop clicks inside modal
        >
          {modalType === "login" ? (
            <Login onClose={closeModal} />
          ) : (
            <PetProfile onClose={closeModal} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
