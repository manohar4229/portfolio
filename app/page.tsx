"use client";
import Image from "next/image";
import {
  Home,
  Folder,
  Wrench,
  Edit,
  Github,
  Globe,
  Code2,
  Database,
  Brain,
  LineChart,
  Server,
  Layout,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import type React from "react";
import { useState } from "react";

export default function HomePage() {
  const projects = [
    {
      title: "article summarizer",
      description:
        "Developed a full-stack web app integrating NLP-based APIs for real-time article summarization.",
      tech: ["React", "Python", "Node Js", "MongoDB", "REST API's"],
      type: "Web Development",
      image: "/image.png?height=800&width=800",
      links: {
        github: "https://github.com/manohar4229/article-summarizer",
        live: "https://sammurai.netlify.app/",
      },
    },
    {
      title: "startup universe",
      description: "Showcase Your Startup, Network with Entrepreneurs",
      tech: [
        "Next Js",
        "Shadcn",
        "Tailwind Css",
        "Node Js",
        "REST APIs",
        "Next Auth",
      ],
      type: "Full Stack Development",
      image: "/startup.png?height=800&width=800",
      links: {
        github: "https://github.com/manohar4229/Startup_Universe",
        live: "https://startup-universe.vercel.app/",
      },
    },
    {
      title: "Product GPT",
      description:
        "A GPT based AI to generate product descriptions,Reviews and Links.",
      tech: ["Tensorflow", "LLMs", "Python"],
      type: "Machine Learning",
      image: "/OIP.jpeg?height=400&width=600",
      links: {
        github:
          "https://colab.research.google.com/drive/19-cSdcApY2VdVUkAmtiguVcADqJtyWY5?usp=sharing",
        live: "https://colab.research.google.com/drive/19-cSdcApY2VdVUkAmtiguVcADqJtyWY5?usp=sharing",
      },
    },
  ];

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
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-zinc-900/80 backdrop-blur-sm px-6 py-3 rounded-full">
          <ul className="flex items-center gap-8">
            <NavItem href="#home" icon={<Home className="w-6 h-6" />} />
            <NavItem href="#projects" icon={<Folder className="w-6 h-6" />} />
            <NavItem href="#skills" icon={<Wrench className="w-6 h-6" />} />
            <NavItem href="#contact" icon={<Edit className="w-6 h-6" />} />
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4">
        {/* Home Section */}
        <section id="home" className="pt-24 pb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Column - Profile Card */}
            <div className="bg-zinc-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative aspect-square mb-6 bg-orange-600 rounded-2xl overflow-hidden">
                <Image
                  src="/manohar.jpeg"
                  alt="Kota Manohar"
                  width={800}
                  height={800}
                  className="object-cover"
                  priority
                />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Kota Manohar
              </h1>
              <p className="text-xl md:text-2xl mb-8">Software Developer</p>
            </div>

            {/* Right Column - Title and Description */}
            <div className="space-y-12">
              <div>
                <h1 className="text-6xl md:text-7xl font-bold text-white mb-2">
                  SOFTWARE
                </h1>
                <h1 className="text-6xl md:text-7xl font-bold text-zinc-800">
                  ENGINEER
                </h1>
              </div>

              <p className="text-xl text-zinc-400 max-w-xl">
                Passionate about creating intuitive and engaging user
                experiences. Specialize in full-stack development and data
                science, transforming complex problems into elegant solutions.
              </p>

              {/* Stats */}
              {/* <div className="flex flex-wrap gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="text-5xl font-bold text-white">
                      +{stat.number}
                    </h3>
                    <p className="text-sm text-zinc-400">{stat.label}</p>
                  </div>
                ))}
              </div> */}

              {/* CTA Button */}
              <div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-full hover:bg-orange-700 transition-colors"
                >
                  Get in Touch
                  <span className="text-xl">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-2">
              FEATURED
            </h2>
            <h2 className="text-6xl md:text-7xl font-bold text-zinc-800 mb-8">
              PROJECTS
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              A collection of projects showcasing my expertise in full-stack
              development, data science, and machine learning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-zinc-900 rounded-3xl p-6 hover:bg-zinc-800/80 transition-colors"
              >
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
                    <span className="text-sm text-orange-500 font-medium">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-zinc-400">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-zinc-800 text-zinc-400 px-3 py-1 rounded-full"
                      >
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
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-2">
              TECHNICAL
            </h2>
            <h2 className="text-6xl md:text-7xl font-bold text-zinc-800 mb-8">
              EXPERTISE
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              A comprehensive overview of my technical skills and proficiencies
              across various domains of software development and data science.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-3xl p-8 hover:bg-zinc-800/80 transition-colors"
              >
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
                        {/* <span className="text-zinc-500">{skill.level}%</span> */}
                      </div>
                      {/* <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-600 rounded-full transition-all duration-500"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div> */}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32">
          <div className="mb-16">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-2">
              GET IN
            </h2>
            <h2 className="text-6xl md:text-7xl font-bold text-zinc-800 mb-8">
              TOUCH
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl">
              Interested in collaborating or have a project in mind? Let's
              connect! Fill out the form below or reach out through my contact
              information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>
      </main>
    </div>
  );
}

// Navigation Item Component
function NavItem({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <li>
      <a
        href={href}
        className="text-zinc-400 hover:text-white transition-colors"
      >
        {icon}
      </a>
    </li>
  );
}

// Contact Form Component
function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formState);
    // Reset form after submission
    setFormState({ name: "", email: "", message: "" });
    alert("Thank you for your message! I will get back to you soon.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-zinc-400 mb-2"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-400 mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-zinc-400 mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formState.message}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 bg-zinc-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-orange-600 text-white py-2 px-4 rounded-md hover:bg-orange-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-zinc-800"
      >
        Send Message
      </button>
    </form>
  );
}

// Contact Info Component
function ContactInfo() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <Mail className="w-6 h-6 text-orange-600" />
        <span className="text-zinc-400">kotamanohar2930@gmail.com</span>
      </div>
      <div className="flex items-center space-x-4">
        <Phone className="w-6 h-6 text-orange-600" />
        <span className="text-zinc-400">+91 7396107241</span>
      </div>
      <div className="flex items-center space-x-4">
        <MapPin className="w-6 h-6 text-orange-600" />
        <span className="text-zinc-400">Andhra Pradesh,</span>
      </div>
      <div className="pt-8">
        <h3 className="text-xl font-bold mb-4">Connect with me</h3>
        <div className="flex space-x-4">
          <a
            href="https://github.com/manohar4229"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/kota-manohar-kt4229/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
