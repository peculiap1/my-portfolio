const Hero = () => {
  return (
    <section className="pt-28 lg:pt-36" id="home">
      <div className="container">
        <div className="hero-content flex-col lg:flex-row">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 lg:pr-10">
            <h1 className="text-5xl font-bold text-center lg:text-start">
              Hello there! I&apos;m Peculia.
            </h1>
            <p className="py-6 text-center lg:text-start">
              - A second-year Informatica student with a passion for Web
              Development.
            </p>
            <div className="flex gap-3">
              <a href="#about">
                <button className="btn bg-accent border-none text-white hover:bg-neutral">
                  More About Me
                </button>
              </a>

              <button className="btn bg-primary text-white">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1RPLBXLPp_BehYaQ1BBEF3E4PfDJmg6ba/view?usp=sharing"
                >
                  View My CV
                </a>
              </button>
            </div>
          </div>

          <div className="lg:w-1/2  mt-6 lg:mt-0 lg:flex lg:justify-end">
            <img
              src="/portrait.jpg"
              className="max-w-sm rounded-lg shadow-2xl mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
