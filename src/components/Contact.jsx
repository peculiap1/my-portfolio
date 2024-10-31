const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch]">Contact Me</h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
            I’m always open to connecting and discussing new opportunities or
            projects. Feel free to reach out to me via email or LinkedIn. I look
            forward to hearing from you!
          </p>
          <div className="flex items-center gap-2 mt-auto">
            <a
              href="https://github.com/peculiap1"
              target="_blank"
              className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color, color] hover:bg-zinc-700  active:bg-zinc-50/80"
            >
              <img src="/github.svg" alt="linkedin" width={35} />
            </a>
            <a
              href="https://www.linkedin.com/in/peculia-peweel/"
              target="_blank"
              className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color, color] hover:bg-zinc-700  active:bg-zinc-50/80"
            >
              <img src="/linkedin.svg" alt="linkedin" width={35} className="" />
            </a>
          </div>
        </div>

        <form
          action="https://getform.io/f/aolgxndb"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="John Doe"
                className="text-field"
              />
            </div>
          </div>

          <div className="mb-4">
            <div className="label">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="john@gmail.com"
                className="text-field"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Type your message here!"
              required
              className="text-field resize-y min-h-32 max-h-80"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary text-white [&]:max-w-full w-full justify-center"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
