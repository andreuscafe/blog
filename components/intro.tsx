const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-20 md:mb-24">
      <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight md:pr-8 text-center md:text-left">
        Preguntas.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        Por{" "}
        <a
          href="https://twitter.com/andreuscafe"
          className="underline hover:text-success duration-200 transition-colors"
        >
          AndreusCafe
        </a>
        .
      </h4>
    </section>
  );
};

export default Intro;
