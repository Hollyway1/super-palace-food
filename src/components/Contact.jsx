import { useState } from "react";

const Contact = () => {
  const [totalPerson, setTotalPerson] = useState(0);

  const handlePersonChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 0 || e.target.value === "") {
      setTotalPerson(value >= 0 ? value : 0);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>
      <div className="max-w-xl md:max-w-2xl mx-auto bg-gray-100 p-6 md:p-8 rounded-xl">
        <label>Date*</label>
        <input type="date" className="w-full p-2 border rounded mb-4" />

        <label>Time*</label>
        <input type="time" className="w-full p-2 border rounded mb-4" />

        <label>Name*</label>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border rounded mb-4"
        />

        <label>Phone*</label>
        <input
          type="text"
          placeholder="x-xxx-xxxx"
          className="w-full p-2 border rounded mb-4"
        />

        <label>Total Person*</label>
        <input
          type="number"
          className="w-full p-2 border rounded mb-4"
          value={totalPerson}
          onChange={handlePersonChange}
          min={0} // prevents spinner from going negative
        />

        <p className="mt-4 font-bold">Call Us:</p>
        <p>07034917189</p>

        <p className="mt-4 font-bold">Whatsapp:</p>
        <p>08128192855</p>

        <p className="mt-4 font-bold">Hours:</p>
        <p>Mon–Fri: 7am - 5pm</p>

        <p className="mt-4 font-bold">Our Location:</p>
        <p>Onigbein Palace, off Loburo, Opic Road, Mowe, Ogun State</p>
      </div>
    </section>
  );
};

export default Contact;
