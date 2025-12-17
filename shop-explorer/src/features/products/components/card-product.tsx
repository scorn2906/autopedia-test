import { Card } from "antd";
import { toRupiahCurrency } from "../../../libs/currency";
import type { MouseEvent } from "react";
import type { Product } from "../product.types";

interface Props {
  product: Product;
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
}
const CardProduct = ({ product, handleClick }: Props) => {
  return (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img draggable={false} alt="example" src={product.images[0]} />}
      onClick={(e) => handleClick(e)}
    >
      <div>
        <h5 className="font-semibold">{product.title}</h5>
        <h4 className="font-semibold">{toRupiahCurrency(product.price)}</h4>
      </div>
    </Card>
  );
};

export default CardProduct;
