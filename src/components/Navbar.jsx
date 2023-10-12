import { Link } from "react-scroll";
import { styles } from "./styles";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import logo from "../assets/logo-og.svg";
const Navbar = () => {
  const [isMenuOppen, setIsMenuOppen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const togggleMenu = () => {
    setIsMenuOppen((vlaue) => !vlaue);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 px-4 md:px-12 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className=" flex items-center gap-2 p-2">
            <img
              src={logo}
              className="h-16 w-16 border-2 cursor-pointer hover:scale-90 border-l-primary border-b-primary border-t-primary p-1 rounded-full "
            />
            <h1 className="text-xl text-primary font-bold cursor-pointer  hover:text-gray-400 hover:scale-90 ">
              SénéGeek
            </h1>
          </div>

          <div className={`lg:flex items-center gap-3 hidden text-body`}>
            <Link
              to="home"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className={`${styles.nav} hover:text-gray-400 text-primary `}
            >
              Home
            </Link>
            <Link
              to="skills"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className={`${styles.nav} hover:text-gray-400 `}
            >
              Skills
            </Link>
            <Link
              to="about"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className={`${styles.nav} hover:text-gray-400 `}
            >
              About me
            </Link>
            <Link
              to="portfolio"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className={`${styles.nav} hover:text-gray-400 `}
            >
              Portfolio
            </Link>
            <Link
              to="testimonials"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className={`${styles.nav} hover:text-gray-400 `}
            >
              Testimonials
            </Link>
          </div>

          <div className="lg:block hidden">
            <Link
              to="contact"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
            >
              <button
                className={`${styles.btn} bg-transparent text-primary hover:scale-90`}
              >
                contact me
              </button>
            </Link>
          </div>

          {/* for mobile devices */}

          <button
            onClick={togggleMenu}
            className="lg:hidden text-body text-3xl"
          >
            {isMenuOppen ? <AiOutlineClose /> : <HiMenu />}
          </button>
        </div>

        {isMenuOppen && (
          <div className="mt-4 bg-body rounded-lg text-white p-4 ">
            <Link
              to="home"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className={`${styles.nav} hover:text-gray-400 text-primary `}
            >
              Home
            </Link>
            <Link
              to="skills"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className={`${styles.nav} hover:text-gray-400 `}
            >
              Skills
            </Link>
            <Link
              to="about"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className={`${styles.nav} hover:text-gray-400 `}
            >
              About me
            </Link>
            <Link
              to="portfolio"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className={`${styles.nav} hover:text-gray-400 `}
            >
              Portfolio
            </Link>
            <Link
              to="testimonials"
              spy={true}
              activeClass="active"
              smooth={true}
              offset={-100}
              className={`${styles.nav} hover:text-gray-400 `}
            >
              Testimonials
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
