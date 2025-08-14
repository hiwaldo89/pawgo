import Link from "next/link";
import Container from "../Container";

const footerLinks = [
  { text: "Blog", url: "/blog" },
  { text: "Preguntas frecuentes", url: "/preguntas-frecuentes" },
  { text: "Soporte", url: "/sooporte" },
  { text: "Términos y condiciones", url: "terminos-condiciones" },
  { text: "Política de privacidad", url: "politica-privacidad" },
];

const Footer = () => {
  return (
    <footer className="bg-peach/20 mt-[100px]">
      <Container>
        <nav>
          <ul className="flex flex-col md:flex-row gap-[35px] justify-center py-[16px]">
            {footerLinks.map((link) => (
              <li key={link.url}>
                <Link href={link.url} className="body-sm">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
      <div className="bg-peach py-[10px]">
        <Container>
          <ul className="flex justify-center gap-[30px]">
            <li>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 3C5.239 3 3 5.239 3 8V16C3 18.761 5.239 21 8 21H16C18.761 21 21 18.761 21 16V8C21 5.239 18.761 3 16 3H8ZM18 5C18.552 5 19 5.448 19 6C19 6.552 18.552 7 18 7C17.448 7 17 6.552 17 6C17 5.448 17.448 5 18 5ZM12 7C14.761 7 17 9.239 17 12C17 14.761 14.761 17 12 17C9.239 17 7 14.761 7 12C7 9.239 9.239 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12C2 17.013 5.693 21.153 10.505 21.876V14.65H8.031V12.021H10.505V10.272C10.505 7.376 11.916 6.105 14.323 6.105C15.476 6.105 16.085 6.19 16.374 6.229V8.523H14.732C13.71 8.523 13.353 9.492 13.353 10.584V12.021H16.348L15.942 14.65H13.354V21.897C18.235 21.236 22 17.062 22 12C22 6.477 17.523 2 12 2Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link href="#">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 3C4.35503 3 3 4.35503 3 6V18C3 19.645 4.35503 21 6 21H18C19.645 21 21 19.645 21 18V6C21 4.35503 19.645 3 18 3H6ZM12 7H14C14 8.005 15.471 9 16 9V11C15.395 11 14.668 10.7342 14 10.2852V14C14 15.654 12.654 17 11 17C9.346 17 8 15.654 8 14C8 12.346 9.346 11 11 11V13C10.448 13 10 13.449 10 14C10 14.551 10.448 15 11 15C11.552 15 12 14.551 12 14V7Z"
                    fill="white"
                  />
                </svg>
              </Link>
            </li>
          </ul>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
