import Image from "next/image";
import Heart from "../Heart/Heart";
import { useFavorites } from "@/app/hooks/useFavorites";

type DogCardProps = {
  dog: {
    id: number;
    url: string;
    image: string;
    name: string;
    years: number;
    gender: string;
    breed: string;
    location: string;
  };
  onClick: () => void;
};

const DogCard: React.FC<DogCardProps> = ({ dog, onClick }) => {
  const { isFavorited, toggleFavorite } = useFavorites();

  return (
    <button
      className="bg-white rounded-[18px] overflow-hidden border cursor-pointer text-left"
      onClick={onClick}
    >
      <div className="h-[180px] relative">
        <Image
          src={dog.image}
          fill
          alt={dog.name}
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />

        <Heart
          filled={isFavorited(dog.id.toString())}
          className="top-[10px] right-[10px]"
          onClick={(e) => {
            e.stopPropagation();
            toggleFavorite(dog.id.toString());
          }}
        />
      </div>
      <div className="px-[18px] py-[25px]">
        <h3 className="subheading text-lavander mb-[20px]">{dog.name}</h3>
        <p className="body-sm mb-[10px]">{dog.years} año(s)</p>
        <p className="body-sm mb-[10px]">{dog.gender}</p>
        <p className="body-sm mb-[20px]">{dog.breed}</p>
        <p className="caption text-gray-secondary text-right">{dog.location}</p>
      </div>
    </button>
  );
};

export default DogCard;
