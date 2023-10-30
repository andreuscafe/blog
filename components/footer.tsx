import Link from "next/link";
import Container from "./container";

const Footer = () => {
  return (
    <footer className="border-t border-neutral-900">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="w-full mb-8 lg:mb-0">
            <Link href="/" className="hover:underline">
              <h3 className="text-3xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-2 lg:pr-4 lg:w-1/2">
                Preguntas.
              </h3>
            </Link>
            <p className="opacity-60 text-center lg:text-left">
              Que me pareció que valía la pena intentar responder.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://twitter.com/andreuscafe"
              target="_blank"
              className="mx-3 bg-neutral-900 hover:bg-white hover:text-neutral-900 border border-neutral-900 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Ando en Twitter
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
