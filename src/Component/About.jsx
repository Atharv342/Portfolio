import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-900 text-white flex justify-center items-center px-6 py-20"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://w7.pngwing.com/pngs/658/622/png-transparent-page-not-found-illustration.png"   alt="profile"
            className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-yellow-400"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">
            About Me
          </h2>

          <p className="text-gray-300 leading-8">
            Hi! I'm Atharv, a passionate Full-Stack Developer who loves building
            modern websites and applications using React, Node.js, Java, and AWS.
          </p>

          <p className="text-gray-300 leading-8 mt-4">
            I enjoy transforming ideas into real-world digital products and focus
            on writing clean, scalable, and high-performance code.
          </p>

          <p className="text-gray-300 leading-8 mt-4">
            When I'm not coding, I explore new technologies, work on side
            projects, and continuously learn to level up my skills.
          </p>

          <a
            href="#projects"
            className="inline-block mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 duration-300"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
