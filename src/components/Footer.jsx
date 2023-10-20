import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai"
import logo from "../assets/logo-og.svg";
import { styles } from "./styles";
import { socialMedias } from "../constant/constant";
const Footer = () => {
  return (
    <div className="bg-bgShade py-24 px-4 md:px-12" id="footer">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 mb-20">
        <a href="" className="flex-shrink-0">
          {" "}
          <img src={logo} className="w-[32px] h-[32px] hover:scale-90" />
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
          {socialMedias.map((socialMedia) => {
            return (
              <div key={socialMedia.id}>
                <a
                  href={socialMedia.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  
                >
                  <Icon iconName={socialMedia.iconName}  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
      <hr />

      <div className="mt-2 flex flex-col md:flex-row justify-between gap-8 ">
        <p className="">Make by Fallou</p>
        <div className="space-x-6">
          <a href="/" className="hover:text-gray-400">
            Privacy Police
          </a>
          <a href="/" className="hover:text-gray-400">
            Term of services
          </a>
          <a href="/" className="hover:text-gray-400">
            Coockie
          </a>
        </div>
      </div>
    </div>
  );
};

const Icon = ({ iconName }) => {
  switch (iconName) {
    case 'github':
      return <FaGithub className={`${styles.socialMedia} `} />;
    case 'e-mail':
      return <AiOutlineMail className={`${styles.socialMedia} `}   />;
    case 'twitter':
      return <FaTwitter className={`${styles.socialMedia} `}  />;
    case 'linkedin':
      return <FaLinkedin className={`${styles.socialMedia} `}  />;
    default:
      return null; // Ou renvoyez une icône par défaut
  }
}
export default Footer;
