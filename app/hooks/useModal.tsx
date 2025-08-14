// hooks/useModal.ts
"use client";
import { createContext, useContext, useState } from "react";
import useQueryParam from "./useQueryParam";

type ModalType = "login" | "petDetails" | null;

type ModalState = {
  modalType: ModalType;
  modalProps?: Record<string, any>;
  openModal: (type: ModalType, props?: Record<string, any>) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalState | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [modalType, setModalType] = useState<ModalType>(null);
  const [modalProps, setModalProps] = useState<Record<string, any>>({});
  const { removeQueryParam } = useQueryParam();

  const openModal = (type: ModalType, props?: Record<string, any>) => {
    setModalType(type);
    setModalProps(props || {});
  };

  const closeModal = () => {
    setModalType(null);
    setModalProps({});
    removeQueryParam("id");
  };

  return (
    <ModalContext.Provider
      value={{ modalType, modalProps, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) throw new Error("useModal must be used within ModalProvider");
  return context;
};
