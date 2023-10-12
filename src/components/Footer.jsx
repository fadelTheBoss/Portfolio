import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.svg";
import { styles } from "./styles";
const Footer = () => {
  return (
    <div className="bg-bgShade py-24 px-4 md:px-12" id="footer">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-20">
        <a href="" className="flex-shrink-0">
          {" "}
          <img src={logo} />
        </a>
        <div className="flex flex-col sm:flex-row md:items-center  gap-4 flex-wrap  ">
          <a href="#home" className="block hover:text-gray-400 py-2 px-4">
            Home
          </a>
          <a href="#portfolio" className="block hover:text-gray-400 py-2 px-4">
            Portfolio
          </a>
          <a href="#about" className="block hover:text-gray-400 py-2 px-4">
            About
          </a>
          <a href="#contact" className="block hover:text-gray-400 py-2 px-4">
            Contact
          </a>
          <a
            href="#testimonials"
            className="block hover:text-gray-400 py-2 px-4"
          >
            Testimonials
          </a>
        </div>

        <div className="flex item-center gap-4 ml-4 ">
          <a href="https://www.facebook.com/people/Benfadel-Seye/pfbid02kvtUu2k5b6oMbreMVqy1VGFvHBAeoXbewcWhLVDsCKMdnVUFg7V1EckUbfnNUrJHl/" target="_blank" rel="noopener noreferrer">

          <FaFacebook className={`${styles.socialMedia}`} />
          </a>

          <a
            href="https://www.instagram.com/fallou_099/?igshid=MzMyNGUyNmU2YQ%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={`${styles.socialMedia}`} />
          </a>

          <a
            href="https://twitter.com/F4llou_?t=GwKCNeYfMswGgXn63J16fQ&s=09"
            target=" _blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className={`${styles.socialMedia}`} />
          </a>


          <FaLinkedin title="pas de lien pour l'instant!" className={`${styles.socialMedia}`} />
          
        </div>
      </div>
      <hr />

      <div className="mt-2 flex flex-col md:flex-row justify-between gap-8 ">
        <p className="">Make with Fallou</p>
        <div className="space-x-6">
          <a href="/" className="hover:text-gray-400">
            Privacy Police
          </a>
          <a href="/" className="hover:text-gray-400">
            Term of services
          </a>
          <a href="/" className="hover:text-gray-400">
            Coockie Settings
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
