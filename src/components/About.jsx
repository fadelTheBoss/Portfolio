import { Link } from "react-scroll";
import experieneImg from "../assets/experienceImage.svg";
const About = () => {
  return (
    <div className="mx-4 lg:mx-12" id="about">
      <div className="flex flex-col sm:flex-row gap-12 md:gap-24 items-center justify-between py-10">
        <div className="sm:w-1/2">
          <img src={experieneImg} className="w-full sm:w-11/12" />
        </div>

        <div className="sm:w-1/2">
          <p className="text-xl font-semibold mb-5">Skills</p>
          <h2 className="text-4xl md:text-5xl font-bold">Experience</h2>
          <p className="mt-8 md:px-8 mb-8 ">
            Je suis un développeur React passionné et compétent, spécialisé dans
            la création d'applications web performantes et conviviales. Ma
            maîtrise de JavaScript, CSS, et React, ainsi que mon expérience avec
            des outils modernes comme Tailwind CSS, me permettent de concevoir
            des interfaces élégantes et fonctionnelles.
            <br /> <br />
            Avec un flair pour le design et une solide expertise en
            programmation, je crée des expériences utilisateur remarquables. Je
            travaille efficacement avec des designers, notamment en utilisant
            Figma, pour donner vie à des interfaces harmonieuses.
            <br />
            <br />
            Je suis toujours avide d'apprendre et de relever de nouveaux défis
            technologiques. Vous pouvez explorer mes projets dans mon portfolio
            et me contacter si vous souhaitez collaborer ou en savoir plus sur
            mon travail.
          </p>

          <Link
            to="contact"
            spy={true}
            activeClass="active"
            smooth={true}
            offset={-100}
          >
            <button className={`btn-primary`}>Contact me </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
