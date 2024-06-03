import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import logo from "../assets/imagotipo.png";

const Nav = ({
  scrollToSection,
  headerRef,
  featureRef,
  aboutRef,
  contactRef,
  pricingRef,
}) => {
  return (
    <nav className="fixed flex justify-between w-full bg-white items-center mx-auto text-xl h-[8vh] px-36 top-0 left-0 z-10 shadow-2xl">
      <Link to={"/"}>
        <img src={logo} alt="" className="w-40" />
      </Link>
      <div className="flex gap-14">
        <ul className="flex items-center gap-10">
          <li
            className="transition-all hover:underline hover:underline-offset-8 hover:text-blue-400"
            onClick={() => scrollToSection(headerRef)}
          >
            <Link>Home</Link>
          </li>
          <li
            className="transition-all hover:underline hover:underline-offset-8 hover:text-blue-400"
            onClick={() => scrollToSection(featureRef)}
          >
            <Link>Features</Link>
          </li>
          <li
            className="transition-all hover:underline hover:underline-offset-8 hover:text-blue-400"
            onClick={() => scrollToSection(pricingRef)}
          >
            <Link>Pricing</Link>
          </li>
          <li
            className="transition-all hover:underline hover:underline-offset-8 hover:text-blue-400"
            onClick={() => scrollToSection(aboutRef)}
          >
            <Link>About</Link>
          </li>
          <li
            className="transition-all hover:underline hover:underline-offset-8 hover:text-blue-400"
            onClick={() => scrollToSection(contactRef)}
          >
            <Link>Contact</Link>
          </li>
        </ul>
        <button className="px-6 py-2 text-white transition-all bg-blue-300 rounded-md hover:bg-blue-400 hover:shadow-md">
          Get Started
        </button>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  scrollToSection: PropTypes.func.isRequired,
  headerRef: PropTypes.object.isRequired,
  featureRef: PropTypes.object.isRequired,
  aboutRef: PropTypes.object.isRequired,
  contactRef: PropTypes.object.isRequired,
  pricingRef: PropTypes.object.isRequired,
};

export default Nav;
