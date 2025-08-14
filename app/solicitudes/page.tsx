"use client";

import { useSearchParams, useRouter } from "next/navigation";
import Button from "../components/Button";
import Input from "../components/Input";
import { useAdoptionRequests } from "../hooks/useAdoptionRequest";
import { useEffect } from "react";
import Container from "../components/Container";

const inputs = [
  { id: "name", label: "Nombre completo", placeholder: "Juan Pérez" },
  { id: "email", label: "Correo electrónico", placeholder: "jperez@gmail.com" },
  { id: "phone", label: "Teléfono", placeholder: "55 1234 5678" },
  { id: "age", label: "Edad", placeholder: "28" },
  {
    id: "address",
    label: "Dirección",
    placeholder: "Calle 123, Colonia Roma, CDMX",
  },
  { id: "city", label: "Ciudad", placeholder: "CDMX" },
  { id: "prev-pets", label: "¿Has tenido mascotas antes? ", placeholder: "Sí" },
  {
    id: "current-pets",
    label: "¿Tienes otras mascotas actualmente?",
    placeholder: "Sí",
  },
  {
    id: "house",
    label: "Tipo de vivienda",
    placeholder: "Casa, Departamento, Otro",
  },
  { id: "garden", label: "¿Tienes patio o jardín?", placeholder: "Sí" },
];

const Requests = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const petId = searchParams.get("id");
  const { addRequest } = useAdoptionRequests();

  if (!petId) {
    return null;
  }

  return (
    <Container>
      <div className="grid grid-cols-12 mt-[50px] md:mt-[100px]">
        <div className="col-span-12 md:col-span-8 md:col-start-3 bg-white rounded-[9px] px-[25px] py-[40px]">
          <div className="md:grid md:grid-cols-2 gap-x-[20px] gap-y-[25px]">
            {inputs.map((input) => (
              <Input
                key={input.id}
                id={input.id}
                label={input.label}
                placeholder={input.placeholder}
                className="mb-[25px] md:mb-0"
              />
            ))}
            <div className="col-span-2 text-right">
              <Button
                size="sm"
                onClick={() => {
                  addRequest(petId);
                  router.push("/mi-cuenta");
                }}
              >
                Enviar solicitud
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Requests;
