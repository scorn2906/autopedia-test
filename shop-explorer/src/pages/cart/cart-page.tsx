import { useCartStore } from "../../store/cart-store";

const CartPage = () => {
  const { products, increment, decrement, removeProduct } = useCartStore();

  const subtotal = products.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {products.length === 0 && (
        <p className="text-gray-500">Your cart is empty</p>
      )}

      <div className="space-y-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 border p-4 rounded-lg"
          >
            <img src={item.image} className="w-20 h-20 object-cover rounded" />

            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-gray-500">${item.price}</p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => decrement(item.id)}
                className="px-2 border rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() => increment(item.id)}
                className="px-2 border rounded"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeProduct(item.id)}
              className="text-red-500"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="mt-8 border-t pt-4 flex justify-between">
        <span className="font-semibold">Subtotal</span>
        <span className="font-semibold">${subtotal}</span>
      </div>
    </div>
  );
};

export default CartPage;
