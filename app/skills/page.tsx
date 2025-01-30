import { Code2, Database, Brain, LineChart, Server, Layout } from "lucide-react"

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
      ],
    },
    {
      title: "Web Technologies",
      icon: <Layout className="w-6 h-6" />,
      skills: [
        { name: "React", level: 90 },
        { name: "HTML5/CSS3", level: 85 },
        { name: "Node.js", level: 80 },
      ],
    },
    {
      title: "Data Science",
      icon: <LineChart className="w-6 h-6" />,
      skills: [
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 90 },
        { name: "Matplotlib", level: 80 },
      ],
    },
    {
      title: "Machine Learning",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Scikit-learn", level: 90 },
        { name: "Neural Networks", level: 80 },
      ],
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Redis", level: 75 },
      ],
    },
    {
      title: "Backend & DevOps",
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Git", level: 90 },
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-2">TECHNICAL</h1>
          <h1 className="text-6xl md:text-7xl font-bold text-zinc-800 mb-8">EXPERTISE</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            A comprehensive overview of my technical skills and proficiencies across various domains of software
            development and data science.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800/80 transition-colors">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-zinc-400">{skill.name}</span>
                      <span className="text-zinc-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-600 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

