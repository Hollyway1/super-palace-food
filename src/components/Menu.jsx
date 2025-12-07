import { useState } from "react";
import { Link } from "react-router-dom";
import menuData from "../data/menuData";
import MenuItemCard from "./MenuItemCard";

const Menu = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart([...cart, item]);

  const removeFromCart = (index) => {
    const updated = [...cart];
    updated.splice(index, 1);
    setCart(updated);
  };

  const getTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="px-6 py-20 animate-fadeIn">
      <h2 className="text-4xl font-bold text-center mb-10">Our Menu</h2>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {menuData.map((item) => (
          <MenuItemCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>

      {/* Cart Section */}
      <div className="mt-16 p-6 bg-gray-100 rounded-xl max-w-xl mx-auto shadow-lg hover:shadow-2xl transition">
        <h3 className="text-3xl font-bold mb-4">Your Order</h3>

        {cart.length === 0 && <p className="text-gray-600">No items selected yet.</p>}

        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center mt-2">
            <span>{item.name} — ₦{item.price}</span>
            <button onClick={() => removeFromCart(index)} className="text-red-600 font-bold">X</button>
          </div>
        ))}

        {cart.length > 0 && (
          <>
            <p className="mt-4 font-bold text-xl">Total: ₦{getTotal()}</p>

            <div className="mt-6 text-center">
              <Link
                to="/payment"
                state={{ cart }}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition"
              >
                Proceed to Payment
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Menu;
