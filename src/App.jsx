import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="about" className="h-screen bg-gray-900 text-white flex items-center justify-center text-3xl">Présentation</section>
      <section id="gallery" className="h-screen bg-gray-800 text-white flex items-center justify-center text-3xl">Galerie</section>
      <section id="agenda" className="h-screen bg-gray-700 text-white flex items-center justify-center text-3xl">Agenda</section>
      <section id="contact" className="h-screen bg-gray-600 text-white flex items-center justify-center text-3xl">Contact</section>
      <Footer />
    </div>
  );
}

export default App;