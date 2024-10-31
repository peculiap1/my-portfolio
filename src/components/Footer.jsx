const Footer = () => {
  return (
    <footer className="section footer text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <img src="/logo.svg" width={36} height={36} alt="" />
        <p> © {new Date().getFullYear()} - Peculia Peweel</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/peculiap1" target="_blank">
          <img src="/github.svg" width={36} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/peculia-peweel/" target="_blank">
          <img src="/linkedin.svg" width={36} alt="github" />
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
