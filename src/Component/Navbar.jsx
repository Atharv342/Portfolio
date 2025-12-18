import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-yellow-400 tracking-wide cursor-pointer">
          Atharv<span className="text-white">Kate</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-white font-medium">

          <li className="hover:text-yellow-400 duration-300 cursor-pointer">
            <Link to="home" smooth={true} duration={500} offset={-70}>
              Home
            </Link>
          </li>

          <li className="hover:text-yellow-400 duration-300 cursor-pointer">
            <Link to="about" smooth={true} duration={500} offset={-70}>
              About
            </Link>
          </li>
          <li className="hover:text-yellow-400 duration-300 cursor-pointer">
    <Link to="skills" smooth={true} duration={500} offset={-70}>
      Skills
    </Link>
  </li>

          <li className="hover:text-yellow-400 duration-300 cursor-pointer">
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              Projects
            </Link>
          </li>

          <li className="hover:text-yellow-400 duration-300 cursor-pointer">
            <Link to="contact" smooth={true} duration={500} offset={-70}>
              Contact
            </Link>
          </li>

         <li>
  <button
    onClick={() => window.open(
      "https://drive.google.com/file/d/1YWVNe6jfn3lyX6W5cantXUuqv9uw5Yt5/view?usp=drive_link",
      "_blank"
    )}
    className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold hover:bg-yellow-500 duration-300"
  >
    Resume
  </button>
</li>


        </ul>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 text-white text-center space-y-6 py-8 text-lg font-medium">

          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-400 duration-300 cursor-pointer"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-400 duration-300 cursor-pointer"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-400 duration-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setIsOpen(false)}
              className="block hover:text-yellow-400 duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>

          <li>
            <a
              href="/resume.pdf"
              download
              className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-500 duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
