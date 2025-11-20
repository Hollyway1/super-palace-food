const MenuItemCard = ({ item, addToCart }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl">
      <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-xl font-bold mt-3">{item.name}</h3>
      <p className="text-red-600 font-semibold">₦{item.price}</p>
      <button
        onClick={() => addToCart(item)}
        className="mt-3 w-full bg-black text-white py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default MenuItemCard;
