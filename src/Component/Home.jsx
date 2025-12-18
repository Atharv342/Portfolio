import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen bg-gray-900 flex flex-col justify-center items-center text-center px-6"
    >
      <h1 className="text-5xl md:text-6xl font-bold text-white">
        Hi, I'm <span className="text-yellow-400">Atharv</span>
      </h1>

      <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-2xl">
        A passionate Full-Stack Developer focused on building modern, scalable,
        and user-friendly web applications.
      </p>

      <div className="flex space-x-6 mt-8">
        <a
          href="#projects"
          className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:bg-yellow-500 duration-300"
        >
          View Projects
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border-2 border-yellow-400 text-yellow-400 rounded-full font-semibold hover:bg-yellow-400 hover:text-black duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
};

export default Home;
