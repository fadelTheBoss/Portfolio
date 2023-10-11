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
          <a href="#testimonials" className="block hover:text-gray-400 py-2 px-4">
            Testimonials
          </a>
        </div>

        <div className="flex item-center gap-4 ml-4 ">
          <FaFacebook className={`${styles.socialMedia}`} />
          <FaInstagram className={`${styles.socialMedia}`} />
          <FaTwitter className={`${styles.socialMedia}`} />
          <FaLinkedin className={`${styles.socialMedia}`} />
        </div>
      </div>
      <hr />
      
      <div className="mt-2 flex flex-col md:flex-row justify-between gap-8 ">
        <p className="">Make with Fallou</p>
        <div className="space-x-6">
            <a href="/" className="hover:text-gray-400">Privacy Police</a>
            <a href="/" className="hover:text-gray-400">Term of services</a>
            <a href="/" className="hover:text-gray-400">Coockie Settings</a>
        </div>
      </div>

    </div>
  );
};

export default Footer;
