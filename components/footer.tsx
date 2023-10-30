import Container from "./container";

const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <div className="flex flex-col gap-2 w-full">
            <h3 className="text-4xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
              ¿Cómo funciona todo?
            </h3>
            <p className="opacity-60">Este es un blog sobre la curiosidad.</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href="https://twitter.com/andreuscafe"
              target="_blank"
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
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
