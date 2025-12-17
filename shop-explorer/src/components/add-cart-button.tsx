import { Button, notification } from "antd";
import type { Product } from "../features/products/product.types";
import { useCartStore } from "../store/cart-store";
import type { NotificationPlacement } from "antd/es/notification/interface";
import { createContext } from "react";
interface Props {
  product: Product;
}

const Context = createContext({ name: "Default" });
const AddToCartButton = ({ product }: Props) => {
  const [api, contextHolder] = notification.useNotification();
  const addItem = useCartStore((state) => state.addItem);

  const addToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
    });
    openNotification("topRight");
  };

  const openNotification = (placement: NotificationPlacement) => {
    api.info({
      title: `Notification ${placement}`,
      description: (
        <Context.Consumer>
          {() => "Product successfull add to cart"}
        </Context.Consumer>
      ),
      placement,
    });
  };

  return (
    <>
      {contextHolder}
      <Button
        variant="solid"
        type="primary"
        onClick={addToCart}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
      >
        Add to Cart
      </Button>
    </>
  );
};

export default AddToCartButton;
