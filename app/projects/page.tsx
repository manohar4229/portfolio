import Image from "next/image"
import { Github, Globe } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Data Analytics Dashboard",
      description: "Full-stack analytics platform with real-time data visualization",
      tech: ["React", "Python", "TensorFlow", "MongoDB"],
      type: "Data Science",
      image: "/placeholder.svg?height=400&width=600",
      links: {
        github: "https://github.com/yourusername/project1",
        live: "https://project1.com",
      },
    },
    {
      title: "ML Model Platform",
      description: "Machine learning model training and deployment platform",
      tech: ["Python", "TensorFlow", "Scikit-learn", "Flask"],
      type: "Machine Learning",
      image: "/placeholder.svg?height=400&width=600",
      links: {
        github: "https://github.com/yourusername/project2",
        live: "https://project2.com",
      },
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      type: "Web Development",
      image: "/placeholder.svg?height=400&width=600",
      links: {
        github: "https://github.com/yourusername/project3",
        live: "https://project3.com",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-2">FEATURED</h1>
          <h1 className="text-6xl md:text-7xl font-bold text-zinc-800 mb-8">PROJECTS</h1>
          <p className="text-xl text-zinc-400 max-w-2xl">
            A collection of projects showcasing my expertise in full-stack development, data science, and machine
            learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-zinc-900 rounded-3xl p-6 hover:bg-zinc-800/80 transition-colors">
              <div className="aspect-video relative mb-6 overflow-hidden rounded-2xl">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="text-sm text-orange-500 font-medium">{project.type}</span>
                </div>

                <p className="text-zinc-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
                  >
                    <Globe className="w-5 h-5" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

