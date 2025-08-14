import Image from "next/image";
import Heart from "../Heart/Heart";
import Button from "../Button";
import { useFavorites } from "@/app/hooks/useFavorites";
import { useAuth } from "@/app/hooks/useAuth";
import { useModal } from "@/app/hooks/useModal";
import dogs from "@/app/data/dogs.json";
import useQueryParam from "@/app/hooks/useQueryParam";

type PetProfileProps = {
  onClose: () => void;
};

const PetProfile: React.FC<PetProfileProps> = ({ onClose }) => {
  const { isFavorited, toggleFavorite } = useFavorites();
  const { user } = useAuth();
  const { openModal, closeModal } = useModal();
  const { setQueryParam, getQueryParam } = useQueryParam();
  const petId = getQueryParam("id");
  const selectedDogData = dogs.find((dog) => dog.id.toString() === petId);

  if (!selectedDogData) {
    return null;
  }

  const buttonProps = !!user
    ? { href: `/solicitudes?id=${selectedDogData.id}`, onClick: closeModal }
    : {
        onClick: () => {
          openModal("login");
          setQueryParam("adopt-req", selectedDogData.id.toString());
        },
      };

  return (
    <div className="px-[25px] py-[39px]">
      <button
        className="cursor-pointer text-lavander underline mb-[30px]"
        onClick={onClose}
      >
        &lt; Regresar a la búsqueda
      </button>
      <div className="relative w-full h-[419px] mb-[30px]">
        <Image
          src={selectedDogData.picture}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1030px"
          unoptimized
        />
        <Heart
          filled={isFavorited(selectedDogData.id.toString())}
          onClick={() => {
            toggleFavorite(selectedDogData.id.toString());
          }}
          className="top-[20px] right-[20px]"
        />
      </div>
      <div className="grid grid-cols-10 gap-[20px]">
        <div className="col-span-12 lg:col-span-7">
          <h2 className="heading text-lavander mb-[20px]">
            {selectedDogData.name}
          </h2>
          <p className="mb-[25px]">
            Big ol pupper big ol aqua doggo shoober extremely cuuuuuute, many
            pats doge big ol, fluffer most angery pupper I have ever seen heck.
            Wow very biscit ruff adorable doggo I am bekom fat yapper, borkf
            pupper puggorino. Doggo smol borking doggo with a long snoot for
            pats puggorino ruff very hand that feed shibe lotsa pats shoob,
            heckin good boys and girls big ol pupper borking doggo clouds. blop.
            Lotsa pats sub woofer most angery pupper I have ever seen noodle
            horse very hand that feed shibe shibe doggo, heckin angery woofer
            shoober yapper bork borkdrive. Shooberino maximum borkdrive many
            pats ur givin me a spook shoober length boy, wow very biscit maximum
            borkdrive long doggo tungg, blep clouds very good spot very taste
            wow. you are doing me the shock puggo. Borking doggo wow such tempt
            thicc stop it fren the neighborhood pupper, wrinkler smol most
            angery pupper I have ever seen.
          </p>
          <div className="w-full aspect-[679/242] relative">
            <Image
              src="/mapa.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="100vw"
              unoptimized
            />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-3">
          <div className="shadow-[2px_4px_15px_5px_rgba(0,0,0,0.25)] rounded-[9px] text-center py-[25px] px-[20px]">
            <h3 className="text-lavander subheading mb-[10px]">
              ¡Adopta a {selectedDogData.name}!
            </h3>
            <p className="body-sm mb-[58px]">
              Borkf doggo you are doin me a concern smol borkf, very taste wow
              sub woofer borkdrive. doggo much ruin diet.
            </p>
            <Button
              size="sm"
              variant="secondary"
              className="mb-[10px] mx-[10px]"
            >
              Preguntas frecuentes
            </Button>
            <Button size="sm" {...buttonProps} className="mx-[10px]">
              Comenzar solicitud
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetProfile;
