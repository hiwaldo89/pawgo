import Container from "../components/Container";
import RecentArticles from "../components/RecentArticles";

const contactCards = [
  {
    id: "phone",
    Icon: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 3.99023C8.48867 3.99023 4 8.4789 4 13.9902V35.9902C4 41.5016 8.48867 45.9902 14 45.9902H36C41.5113 45.9902 46 41.5016 46 35.9902V13.9902C46 8.4789 41.5113 3.99023 36 3.99023H14ZM18.0059 12.0332C18.6339 12.0602 19.2106 12.414 19.5586 12.957C19.9546 13.575 20.5691 14.5342 21.3691 15.7852C22.0991 16.9262 22.15 18.3998 21.498 19.5898L20.0332 21.6738C19.6372 22.2378 19.5582 22.9597 19.8242 23.5957C20.2382 24.5857 21.0408 26.1072 22.4668 27.5332C23.8928 28.9592 25.4143 29.7618 26.4043 30.1758C27.0403 30.4418 27.7622 30.3628 28.3262 29.9668L30.4102 28.502C31.6002 27.85 33.0738 27.9019 34.2148 28.6309C35.4658 29.4309 36.425 30.0454 37.043 30.4414C37.586 30.7894 37.9398 31.3661 37.9668 31.9941C38.1208 35.5581 35.3596 37.002 34.5566 37.002C34.0006 37.002 27.3163 37.7617 19.7773 30.2227C12.2383 22.6837 12.998 15.9994 12.998 15.4434C12.998 14.6404 14.4419 11.8792 18.0059 12.0332Z"
          fill="#6C77FF"
        />
      </svg>
    ),
    title: "Llámanos",
    text: "Contáctanos al (442) 123 5678",
  },
  {
    id: "email",
    Icon: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 4C8.48867 4 4 8.48867 4 14V36C4 41.5113 8.48867 46 14 46H36C41.5113 46 46 41.5113 46 36V14C46 8.48867 41.5113 4 36 4H14ZM13 16H37C37.18 16 37.3498 16.0203 37.5098 16.0703L27.6797 25.8906C26.1997 27.3706 23.7905 27.3706 22.3105 25.8906L12.4902 16.0703C12.6502 16.0203 12.82 16 13 16ZM11.0703 17.4902L18.5898 25L11.0703 32.5098C11.0203 32.3498 11 32.18 11 32V18C11 17.82 11.0203 17.6502 11.0703 17.4902ZM38.9297 17.4902C38.9797 17.6502 39 17.82 39 18V32C39 32.18 38.9797 32.3498 38.9297 32.5098L31.4004 25L38.9297 17.4902ZM20 26.4102L20.8906 27.3105C22.0206 28.4405 23.5102 29 24.9902 29C26.4802 29 27.9598 28.4405 29.0898 27.3105L29.9902 26.4102L37.5098 33.9297C37.3498 33.9797 37.18 34 37 34H13C12.82 34 12.6502 33.9797 12.4902 33.9297L20 26.4102Z"
          fill="#6C77FF"
        />
      </svg>
    ),
    title: "Escríbenos",
    text: "Mándanos un mensaje a hola@pawgo.com",
  },
  {
    id: "chat",
    Icon: () => (
      <svg
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.0001 2C12.3181 2 2.00015 12.318 2.00015 25C2.00015 28.96 3.02315 32.854 4.96315 36.29L2.03715 46.73C1.94115 47.073 2.03415 47.441 2.28215 47.696C2.47315 47.893 2.73315 48 3.00015 48C3.08015 48 3.16115 47.99 3.24015 47.971L14.1361 45.272C17.4631 47.058 21.2101 48 25.0001 48C37.6821 48 48.0001 37.682 48.0001 25C48.0001 12.318 37.6821 2 25.0001 2ZM36.5701 33.116C36.0781 34.478 33.7181 35.721 32.5841 35.888C31.5661 36.037 30.2781 36.101 28.8641 35.657C28.0071 35.387 26.9071 35.029 25.4981 34.428C19.5751 31.902 15.7071 26.013 15.4111 25.624C15.1161 25.235 13.0001 22.463 13.0001 19.594C13.0001 16.725 14.5251 15.314 15.0671 14.73C15.6091 14.146 16.2481 14 16.6421 14C17.0361 14 17.4291 14.005 17.7741 14.021C18.1371 14.039 18.6241 13.884 19.1031 15.022C19.5951 16.19 20.7761 19.059 20.9221 19.352C21.0702 19.644 21.1681 19.985 20.9721 20.374C20.7761 20.763 20.6781 21.006 20.3821 21.347C20.0861 21.688 19.7621 22.107 19.4961 22.369C19.2001 22.66 18.8931 22.975 19.2371 23.559C19.5811 24.143 20.7661 26.052 22.5221 27.598C24.7771 29.584 26.6801 30.2 27.2701 30.492C27.8601 30.784 28.2051 30.735 28.5491 30.346C28.8931 29.956 30.0251 28.643 30.4181 28.06C30.8111 27.477 31.2051 27.573 31.7471 27.768C32.2891 27.962 35.1922 29.372 35.7822 29.664C36.3722 29.956 36.7662 30.102 36.9142 30.345C37.0621 30.587 37.0621 31.755 36.5701 33.116Z"
          fill="#6C77FF"
        />
      </svg>
    ),
    title: "Chatea",
    text: "Mándanos un Whatsapp al (442) 123 5678",
  },
];

const Support = () => {
  return (
    <>
      <Container className="mt-[50px] mb-[100px]">
        <h2 className="heading text-lavander mb-[24px]">
          ¿Tienes dudas o preguntas?
        </h2>
        <p className="body max-w-[680px] mb-[54px]">
          Big ol pupper big ol aqua doggo shoober extremely cuuuuuute, many pats
          doge big ol, fluffer most angery pupper I have ever seen heck. Wow
          very biscit ruff adorable doggo I am bekom fat yapper, borkf pupper
          puggorino. Doggo smol borking doggo with a long snoot for pats
          puggorino ruff very hand that feed shibe lotsa pats shoob, heckin good
          boys and girls big ol pupper borking doggo clouds. blop.
        </p>
        <div className="md:grid md:grid-cols-3 gap-[20px]">
          {contactCards.map(({ id, Icon, title, text }) => (
            <div
              key={id}
              className="border border-[2px] border-gray-primary rounded-[9px] bg-white py-[25px] px-4 text-center flex flex-col mb-[20px] md:mb-0"
            >
              <div className="mx-auto mb-[14px]">
                <Icon />
              </div>
              <h3 className="subheading text-center mb-[14px]">{title}</h3>
              <p className="body-sm lg:body text-center">{text}</p>
            </div>
          ))}
        </div>
      </Container>
      <RecentArticles />
    </>
  );
};

export default Support;
