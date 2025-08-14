import { useFavorites } from "@/app/hooks/useFavorites";
import dogs from "@/app/data/dogs.json";
import DogCard from "../DogCard/DogCard";
import { useModal } from "@/app/hooks/useModal";
import useQueryParam from "@/app/hooks/useQueryParam";

const AccountFavorites = () => {
  const { favorites } = useFavorites();
  const { openModal } = useModal();
  const { setQueryParam } = useQueryParam();
  const favoritedDogs = favorites
    .map((favorite) => dogs.find((dog) => dog.id.toString() === favorite))
    .filter((favorite) => !!favorite);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
      {favoritedDogs.map((dog) => (
        <DogCard
          key={`dog-${dog.id}`}
          dog={{
            id: dog.id,
            url: `/mascotas/${dog.id}`,
            image: dog.picture,
            name: dog.name,
            years: dog.years,
            gender: dog.gender,
            breed: dog.breed,
            location: dog.location,
          }}
          onClick={() => {
            setQueryParam("id", dog.id.toString());
            openModal("petDetails");
          }}
        />
      ))}
    </div>
  );
};

export default AccountFavorites;
