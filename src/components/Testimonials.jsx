import testimonials from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gray-100 animate-fadeIn">
      <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow-md p-6 rounded-xl text-center hover:scale-[1.03] hover:shadow-xl transition duration-300"
          >
            <img
              src={t.img}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto hover:scale-110 transition"
            />
            <h3 className="text-xl font-bold mt-4">{t.name}</h3>
            <p className="text-yellow-500 text-center text-lg mt-1">
              {"⭐".repeat(t.rating)}
            </p>
            <p className="text-gray-700 mt-2">{t.msg}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
