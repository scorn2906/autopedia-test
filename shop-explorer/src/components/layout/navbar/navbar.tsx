import { Link } from "react-router-dom";
import { useCartStore } from "../../../store/cart-store";

const Navbar = () => {
  const { products } = useCartStore();
  return (
    <div className="w-full flex items-center justify-center bg-blue-300">
      <div className="w-full max-w-300 flex items-center justify-between p-5">
        <Link to="/">Shoping Cart</Link>
        <div>
          <Link
            className="flex items-center gap-x-1 cursor-pointer"
            to={"/cart"}
          >
            <p>Cart </p>
            {products.length > 0 && (
              <div className="w-5 h-5 rounded-full bg-white p-2 text-xs text-center flex items-center justify-center">
                {products.length}
              </div>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
