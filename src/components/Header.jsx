import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Navbar from "./Navbar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHeaderVisible(false);
      } else {
        setHeaderVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 transition-transform duration-300 ${
        headerVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-2xl w-full px-4 mx-auto flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        <h1>
          <Link to="/" className="logo">
            <img src="/logo.svg" width={40} height={40} alt="Peculia Peweel" />
          </Link>
        </h1>

        {isHomePage && (
          <>
            <div className="relative md:justify-self-center">
              <button
                className="menu-btn md:hidden"
                onClick={() => setNavOpen((prev) => !prev)}
              >
                <span className="material-symbols-rounded">
                  {navOpen ? "close" : "menu"}
                </span>
              </button>
              <Navbar navOpen={navOpen} />
            </div>

            <Link
              to="/projects"
              className="btn btn-secondary max-md:hidden md:justify-self-end"
            >
              My Projects
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
