import { useLocation, Link } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const cart = location.state?.cart || []; // get cart items from previous page

  const handlePayment = () => {
    // Simulate payment process
    alert("Payment successful!");
    // In a real app, you would integrate a payment gateway like Paystack, Stripe, etc.
  };

  return (
    <section className="px-6 py-20 max-w-2xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">Payment</h2>

      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="mb-6">
            {cart.map((item, index) => (
              <div key={index} className="flex justify-between py-2 border-b">
                <span>{item.name}</span>
                <span>₦{item.price}</span>
              </div>
            ))}
            <p className="font-bold text-xl text-right mt-4">
              Total: ₦{cart.reduce((sum, item) => sum + item.price, 0)}
            </p>
          </div>

          <div className="text-center">
            <button
              onClick={handlePayment}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg font-semibold"
            >
              Pay Now
            </button>
          </div>

          <div className="mt-6 text-center">
            {/* Example success message */}
            <p className="text-green-600 font-bold">Payment Successful! 🎉</p>
          </div>

          <div className="mt-4 text-center">
            <Link
              to="/"
              className="text-blue-600 hover:underline"
            >
              Back to Home
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default Payment;
