import Banner from "../Banner";
import BlogCard from "../BlogCard";
import Button from "../Button";
import Container from "../Container";
import blog from "@/app/data/blog.json";

const RecentArticles = () => {
  const articles = blog.slice(0, 2);

  return (
    <Container>
      <h2 className="heading text-lavander mb-[50px]">
        ¿Primera vez adoptando? Lee esto
      </h2>
      <div className="grid md:grid-cols-3 gap-[20px]">
        <Banner />
        {articles.map(({ id, image, title, description }) => (
          <BlogCard
            key={id}
            title={title}
            image={image}
            description={description}
          />
        ))}
      </div>
      <div className="text-center mt-[50px]">
        <Button href="/blog">Ver más</Button>
      </div>
    </Container>
  );
};

export default RecentArticles;
