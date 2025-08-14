import Image from "next/image";
import Button from "../Button";

type BlogCardProps = {
  image: string;
  title: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ image, title, description }) => {
  return (
    <div className="rounded-[18px] bg-white border overflow-hidden flex flex-col">
      <div className="relative min-h-[175px] bg-lavander">
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
      </div>
      <div className="p-[15px] flex flex-col h-full">
        <div>
          <h3 className="subheading mb-[16px]">{title}</h3>
          <p className="body-sm">{description}</p>
        </div>
        <div className="mt-auto">
          <Button href="#" size="sm">Leer</Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
