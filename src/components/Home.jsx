import {AiOutlineArrowRight} from "react-icons/ai"
import bannerImage from "../assets/bannerImage.svg"
const Home = () => {
  return (
    <div className="mt-20 bg-bgShade" id="home">
      <div className="lg:px-10 px-4 flex flex-col md:flex-row-reverse items-center py-24 gap-5">
        <div className="md:w-1/2 w-full ">
          <img src={bannerImage} alt="" className="w-full justify-between " />
        </div>
        <div className="md:w-1/2 w-full mt-5 ">
          <h3 className="text-xl text-headingcolor font-semibold mb-5">
            hey, I'm Fallou
          </h3>
          <h1
            className="md:text-6xl text-4xl font-bold text-headingcolor
           leading-snug md:leading-[76px]      mb-5"
          >
            I create <span className="text-primary">product design</span> and
            brand experience
          </h1>
          <p className="text-body text-2xl leading-9 mb-8 mr-6  ">
            Je suis un développeur React passionné, créant des applications web
            réactives, élégantes et performantes. Ma maîtrise de React et son
            environnement, me permet de concevoir des interfaces utilisateur
            dynamiques. Je suis dévoué à offrir des expériences exceptionnelles
            et à innover constamment pour façonner l'avenir du web.
          </p>
            <button
              className={` btn-primary flex gap-4 items-center  `}
            >
              Get it touch
            <AiOutlineArrowRight className=" rotate-45 hover:rotate-90 transition-all duration-300 text-xl  "  size={35} />
            </button>
        
        </div>
      </div>
    </div>
  );
};

export default Home;
