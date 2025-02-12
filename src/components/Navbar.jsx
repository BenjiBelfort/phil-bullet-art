import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-2xl font-bold">Street Artiste</a>

        {/* Bouton Menu Hamburger */}
        <button 
          className="md:hidden text-white text-3xl" 
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Liens du menu */}
        <ul className={`md:flex gap-6 absolute md:static left-0 top-full w-full md:w-auto bg-black md:bg-transparent transition-all duration-300 ${isOpen ? "block" : "hidden"}`}>
          <li><a href="#about" className="block py-2 px-4 hover:text-gray-400">Présentation</a></li>
          <li><a href="#gallery" className="block py-2 px-4 hover:text-gray-400">Galerie</a></li>
          <li><a href="#agenda" className="block py-2 px-4 hover:text-gray-400">Agenda</a></li>
          <li><a href="#contact" className="block py-2 px-4 hover:text-gray-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
