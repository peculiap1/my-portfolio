import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom"; // Import useLocation

const Navbar = ({ navOpen }) => {
  const lastActiveLink = useRef();
  const activeBox = useRef();
  const location = useLocation();

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height =
        lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(initActiveBox, []);
  window.addEventListener("resize", initActiveBox);

  const activeCurrentLink = (e) => {
    lastActiveLink.current?.classList.remove("active");
    e.target.classList.add("active");
    lastActiveLink.current = e.target;

    activeBox.current.style.top = e.target.offsetTop + "px";
    activeBox.current.style.left = e.target.offsetLeft + "px";
    activeBox.current.style.width = e.target.offsetWidth + "px";
    activeBox.current.style.height = e.target.offsetHeight + "px";
  };

  // Define navigation items conditionally based on route
  const navItems =
    location.pathname === "/projects"
      ? [
          {
            label: "Contact Me",
            link: "/#contact", // Updated to go back to homepage contact section
            className: "nav-link",
          },
        ]
      : [
          {
            label: "Home",
            link: "#home",
            className: "nav-link active",
            ref: lastActiveLink,
          },
          { label: "About", link: "#about", className: "nav-link" },
          { label: "Contact", link: "#contact", className: "nav-link" },
          {
            label: "My Projects",
            link: "/projects",
            className: "nav-link md:hidden",
            isExternal: true,
          },
        ];

  return (
    <nav className={"navbar " + (navOpen ? "active" : "")}>
      {navItems.map(({ label, link, className, ref, isExternal }, key) =>
        isExternal ? (
          <Link
            to={link}
            key={key}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
          >
            {label}
          </Link>
        ) : (
          <a
            href={link}
            key={key}
            ref={ref}
            className={className}
            onClick={activeCurrentLink}
          >
            {label}
          </a>
        )
      )}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
