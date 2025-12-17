import { useParams } from "react-router-dom";
import { useProductQuery } from "../../features/products/api/use-product-query";
import { toRupiahCurrency } from "../../libs/currency";
import AddToCartButton from "../../components/add-cart-button";

const DetailProductPage = () => {
  const { id } = useParams();

  const { data: detailProduct } = useProductQuery(id || "");
  return (
    <div>
      {detailProduct && (
        <>
          <h2 className="text-4xl font-bold">Detail Product</h2>
          <div className="grid grid-cols-3 gap-x-3">
            {detailProduct?.images.map((item) => {
              return <img src={item} />;
            })}
          </div>
          <div className="flex flex-col gap-4 mt-5">
            <div>
              <p className="text-sm text-gray-500">
                Category: {detailProduct?.category.name}
              </p>
              <h1 className="text-3xl font-bold">{detailProduct?.title}</h1>
            </div>
            <p className="text-2xl font-semibold text-indigo-600">
              {toRupiahCurrency(detailProduct?.price || 0)}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {detailProduct?.description}
            </p>
            <div className="flex gap-4 mt-6">
              <AddToCartButton product={detailProduct} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailProductPage;
