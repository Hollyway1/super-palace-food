import testimonials from "../data/testimonials";

const Testimonials = () => {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-10">Testimonials</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-white shadow-md p-6 rounded-xl">
            <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full mx-auto" />
            <h3 className="text-xl font-bold mt-4 text-center">{t.name}</h3>
            <p className="text-yellow-500 text-center">{"⭐".repeat(t.rating)}</p>
            <p className="text-center mt-2">{t.msg}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
