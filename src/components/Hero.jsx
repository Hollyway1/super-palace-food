import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-end bg-cover bg-center px-4 relative"
      style={{ backgroundImage: "url('/assets/restaurant-background (1).jpg')" }}
    >

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative bg-white/30 backdrop-blur-md p-6 md:p-10 rounded-xl text-center mb-16 w-full max-w-xl shadow-xl animate-fadeUp">

        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-white drop-shadow-lg">
          Welcome to Super Palace Food
        </h1>

        <p className="text-lg md:text-xl mb-5 text-white font-medium drop-shadow">
          Taste the best of Super Palace Food
        </p>

        <Link to="/menu">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white text-lg md:text-xl shadow-lg hover:scale-105 transition duration-300">
            Place Your Order
          </button>
        </Link>
      </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/2347034917189?text=Hello%20I%20want%20to%20place%20an%20order"
        target="_blank"
        rel="noopener noreferrer"
        className="relative mb-10 bg-green-600 px-6 py-3 rounded-full font-semibold text-white shadow-xl hover:bg-green-500 transition hover:scale-110 animate-pulse"
      >
        Order on WhatsApp
      </a>

    </section>
  );
};

export default Hero;
