const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets using D3.js and React.",
    technologies: ["React", "D3.js", "Python", "Flask"],
  },
  {
    title: "Machine Learning Model for Predictive Maintenance",
    description: "Developed a machine learning model to predict equipment failures in industrial settings.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

