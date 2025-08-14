"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type AdoptionRequestsContextType = {
  requests: string[]; // array of pet IDs
  addRequest: (id: string) => void;
  removeRequest: (id: string) => void;
  clearRequests: () => void;
};

const AdoptionRequestsContext = createContext<
  AdoptionRequestsContextType | undefined
>(undefined);

export function AdoptionRequestsProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [requests, setRequests] = useState<string[]>([]);

  const addRequest = (id: string) => {
    setRequests((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const removeRequest = (id: string) => {
    setRequests((prev) => prev.filter((petId) => petId !== id));
  };

  const clearRequests = () => {
    setRequests([]);
  };

  return (
    <AdoptionRequestsContext.Provider
      value={{
        requests,
        addRequest,
        removeRequest,
        clearRequests,
      }}
    >
      {children}
    </AdoptionRequestsContext.Provider>
  );
}

export function useAdoptionRequests() {
  const context = useContext(AdoptionRequestsContext);
  if (!context) {
    throw new Error(
      "useAdoptionRequests must be used within an AdoptionRequestsProvider"
    );
  }
  return context;
}
