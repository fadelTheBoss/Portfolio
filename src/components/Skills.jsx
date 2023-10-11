import { skills } from "./constant";
import { styles } from "./styles";
const Skills = () => {
  return (
    <div className="mx-4 lg:mx-12 py-32" id="skills">
      <div className="text-headingcolor mb-20">
        <p className="text-xl font-semibold mb-5">My Skills</p>
        <h2 className="text-4xl md:text-5xl font-bold">My Expertise</h2>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {
          skills.map((skill)=>{
            return <div key={skill.id} className={` first-type-of:${styles.skillCard} bg-bgShade p-8 rounded-lg cursor-pointer hover:-translate-y-4 transition-all duration-300 skillcard `}  >
              <img src={skill.image} className="w-14 h-14 bg-white rounded-lg shadow-md mb-5 p-3" />
              <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
              <p className="text-body mb-4">{skill.description}</p>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Skills
 

