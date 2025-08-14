import Image from "next/image";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="px-[15px] py-[25px] bg-white text-center border rounded-[18px]">
      <Image
        src="/test-image.png"
        alt="banner"
        width={100}
        height={110}
        unoptimized
        className="mx-auto mb-[20px]"
      />
      <div className="max-w-[250px] mx-auto">
        <h3 className="subheading text-center mb-[20px]">
          ¿Cuál es tu compañero ideal?
        </h3>
        <p className="body mb-[20px]">
          Haz este test rápido y descubre qué tipo de mascota se adapta mejor a
          tu estilo de vida. ¡Encuentra a tu mejor amigo peludo hoy mismo!
        </p>
        <Button href="#" variant="secondary" size="sm">
          Hacer el test
        </Button>
      </div>
    </div>
  );
};

export default Banner;
