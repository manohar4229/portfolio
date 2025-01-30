import { FaJava, FaPython, FaJs, FaHtml5, FaCss3, FaReact, FaGitAlt, FaDatabase } from "react-icons/fa"
import { SiTensorflow, SiScikitlearn, SiNumpy, SiPandas, SiMongodb } from "react-icons/si"

const skills = [
  { name: "Java", icon: FaJava },
  { name: "Python", icon: FaPython },
  { name: "JavaScript", icon: FaJs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3 },
  { name: "React", icon: FaReact },
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Git", icon: FaGitAlt },
  { name: "NumPy", icon: SiNumpy },
  { name: "Pandas", icon: SiPandas },
  { name: "MongoDB", icon: SiMongodb },
  { name: "SQL", icon: FaDatabase },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md">
              <skill.icon className="text-4xl mb-2 text-blue-600" />
              <span className="text-gray-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

