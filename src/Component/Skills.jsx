import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaDatabase, FaTools, FaLightbulb } from "react-icons/fa";
import {  SiMysql, SiReact } from "react-icons/si";

const Skills = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-900 text-white py-20 px-6"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold text-yellow-400">
          Technical Skills
        </h2>
        <p className="text-gray-400 mt-3 text-lg">
          Technologies I work with
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-2 gap-10">

        {/* Languages */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="p-8 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-yellow-400 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <FaCode className="text-3xl text-yellow-400" />
            <h3 className="text-2xl font-semibold text-yellow-400">
              Languages
            </h3>
          </div>
          <p className="text-gray-300 mt-4 text-lg">
            Java (8/11), JavaScript
          </p>
        </motion.div>

        {/* Frontend */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="p-8 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-yellow-400 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <SiReact className="text-3xl text-yellow-400" />
            <h3 className="text-2xl font-semibold text-yellow-400">
              Frontend
            </h3>
          </div>
          <p className="text-gray-300 mt-4 text-lg">
            HTML5, CSS3, React.js
          </p>
        </motion.div>

        {/* Backend */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="p-8 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-yellow-400 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <FaLaptopCode className="text-3xl text-yellow-400" />
            <h3 className="text-2xl font-semibold text-yellow-400">
              Backend
            </h3>
          </div>
          <p className="text-gray-300 mt-4 text-lg">
            Servlets, JSP, JDBC, Spring MVC, Spring, Spring Boot, Spring AI
          </p>
        </motion.div>

        {/* Databases */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="p-8 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-yellow-400 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <SiMysql className="text-3xl text-yellow-400" />
            <h3 className="text-2xl font-semibold text-yellow-400">
              Databases
            </h3>
          </div>
          <p className="text-gray-300 mt-4 text-lg">
            MySQL
          </p>
        </motion.div>

        {/* Tools */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="p-8 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-yellow-400 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <FaTools className="text-3xl text-yellow-400" />
            <h3 className="text-2xl font-semibold text-yellow-400">
              Tools & Platforms
            </h3>
          </div>
          <p className="text-gray-300 mt-4 text-lg">
            Git, GitHub, Maven, Tomcat, Eclipse, VS Code, Postman
          </p>
        </motion.div>

        {/* Core Concepts */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="p-8 rounded-xl bg-gray-800/60 backdrop-blur-lg border border-yellow-400 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <FaLightbulb className="text-3xl text-yellow-400" />
            <h3 className="text-2xl font-semibold text-yellow-400">
              Core Concepts
            </h3>
          </div>
          <p className="text-gray-300 mt-4 text-lg">
            OOP, DBMS, OS, RESTful APIs, MVC Architecture, Authentication & Security
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
