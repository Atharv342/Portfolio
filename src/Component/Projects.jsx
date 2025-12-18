import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-400">
          Projects
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Here are some of my featured works
        </p>
      </div>

      {/* Project Cards */}
      <div className="mt-14 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Project 1 */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-yellow-400 hover:scale-105 duration-300">
          <h3 className="text-2xl font-semibold text-yellow-400">
            QGenAI – AI-Powered Question Paper Generator
          </h3>

          <p className="text-gray-300 mt-4">
            AI-powered platform that generates question papers based on selected
            topics, domains, and difficulty levels. Supports subjects like Programming,
            Aptitude, Logic, AWS, DevOps, Networking, and DSA.
          </p>

          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-sm">
            <li>Secure Login & Registration with Spring Security + JWT</li>
            <li>Dynamic question generation using Spring AI</li>
            <li>Full-stack exam platform using React + Spring Boot</li>
            <li>Scoring, analytics, accuracy tracking and history</li>
            <li>Answer explanations, test review and improvement insights</li>
          </ul>

          <p className="text-yellow-300 font-semibold mt-6">
            Tech Stack:
          </p>

          <p className="text-gray-300 mt-1">
            Spring Boot, Spring AI, React.js, Spring Security, REST API, MySQL, JWT
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-800 p-8 rounded-2xl shadow-lg hover:scale-105 duration-300">
          <h3 className="text-2xl font-semibold text-yellow-400">
            Your Next Project
          </h3>

          <p className="text-gray-300 mt-4">
            Add your second project details here. Share what problem it solves,
            how you built it, and what technologies you used.
          </p>

          <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2 text-sm">
            <li>Core functionality</li>
            <li>Tech stack</li>
            <li>Results/impact</li>
            <li>Features</li>
          </ul>

          <p className="text-yellow-300 font-semibold mt-6">
            Tech Stack:
          </p>

          <p className="text-gray-300 mt-1">
            React.js | Node.js | MongoDB
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
