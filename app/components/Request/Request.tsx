import dogs from "@/app/data/dogs.json";
import Image from "next/image";
import Stepper from "../Stepper/Stepper";

type RequestProps = { id: string };

const Request: React.FC<RequestProps> = ({ id }) => {
  const selectedDog = dogs.find((dog) => dog.id.toString() === id);

  if (!selectedDog) {
    return null;
  }

  return (
    <div className="border rounded-[9px] p-[20px]">
      <div className="mx-auto rounded w-[120px] h-[120px] rounded-full overflow-hidden relative mb-[10px]">
        <Image
          src={selectedDog.picture}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          sizes="120px"
          unoptimized
        />
      </div>
      <h3 className="subheading text-lavander text-center mb-[10px]">
        {selectedDog.name}
      </h3>
      <Stepper
        steps={[
          { label: "Solicitud enviada" },
          { label: "En revisión" },
          { label: "Entrevista agendada" },
          { label: "Aprobación final" },
        ]}
        currentStep={0}
      />
    </div>
  );
};

export default Request;
