import { Link } from "react-router-dom";

const Hero = () => {
  return (
   <section
  className="min-h-screen flex items-end justify-center bg-cover bg-center px-4"
  style={{ backgroundImage: "url('/assets/restaurant-cover.jpg')" }}
>


<div className="bg-white bg-opacity-60 p-4 md:p-10 rounded-xl text-center mb-10 md:mb-16 w-full max-w-xl">

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-red-600">
          Welcome to Super Palace Food
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-5 text-gray-800">
          Taste the best of Super Palace Food
        </p>

        <Link to="/menu">
          <button className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-white text-lg md:text-xl">
            Place Your Order
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
