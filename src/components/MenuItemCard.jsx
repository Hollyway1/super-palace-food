const MenuItemCard = ({ item, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300">

      <img
        src={item.img}
        alt={item.name}
        className="w-full h-40 object-cover rounded-lg hover:scale-105 transition duration-300"
      />

      <h3 className="text-xl font-bold mt-3">{item.name}</h3>
      <p className="text-red-600 font-semibold">₦{item.price}</p>

      <button
        onClick={() => addToCart(item)}
        className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 hover:scale-105 transition"
      >
        order now
      </button>
    </div>
  );
};

export default MenuItemCard;
