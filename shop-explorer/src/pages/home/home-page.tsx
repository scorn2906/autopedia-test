import { useNavigate, useSearchParams } from "react-router-dom";
import { useProductsQuery } from "../../features/products/api/use-product-query";
import CardProduct from "../../features/products/components/card-product";
import type { Product } from "../../features/products/product.types";
import { Button, Input, Select } from "antd";
import { useCategoryProductQuery } from "../../features/products/api/use-category-query";
import { convertOptions } from "../../libs/utils";
import { useState } from "react";
import EmptyState from "../../components/empty-state";
import ProductSkeleton from "../../features/products/components/product-skeleton";

const HomePage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const title = searchParams.get("title") || "";
  const categoryId = searchParams.get("categoryId") || "";
  const [formFilter, setFormFilter] = useState({
    title: title ?? "",
    categoryId: categoryId ?? "",
  });
  const {
    data: products,
    isError,
    refetch,
    isFetching,
  } = useProductsQuery({ title, categoryId });
  const { data: categories } = useCategoryProductQuery();

  const handleCategory = (value: number) => {
    setFormFilter({ ...formFilter, categoryId: String(value) });
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("categoryId", String(value));
    else params.delete("categoryId");
    setSearchParams(params);
  };

  const goTo = (id: number) => {
    navigate(`/product/${id}`);
  };

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (formFilter.title) params.set("title", formFilter.title);
    if (formFilter.categoryId) params.set("categoryId", formFilter.categoryId);
    setSearchParams(params);
  };

  const handleReset = () => {
    setFormFilter({ title: "", categoryId: "" });
    setSearchParams({});
  };

  return (
    <div className="">
      <h1>List Products</h1>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-3xl">Products</h2>
          <div className="flex items-center gap-x-3">
            <Input
              placeholder="Search Product"
              value={formFilter.title}
              onChange={(e) =>
                setFormFilter({ ...formFilter, title: e.target.value })
              }
            />
            <Select
              value={
                formFilter.categoryId
                  ? Number(formFilter.categoryId)
                  : undefined
              }
              onChange={handleCategory}
              options={convertOptions(categories || [], "name", "id")}
              placeholder="Choose category"
            />
            <Button
              type="primary"
              onClick={(e) => {
                e.stopPropagation();
                handleSearch();
              }}
            >
              Search
            </Button>
            <Button
              onClick={(e) => {
                e.stopPropagation();
                handleReset();
              }}
            >
              Reset filter
            </Button>
          </div>
        </div>
        {isFetching && (
          <div className="grid grid-cols-4 gap-5 mt-5">
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductSkeleton key={index} />
            ))}
          </div>
        )}
        {isError && (
          <div className="flex flex-col items-center justify-center mt-10 gap-4">
            <p className="text-red-500">
              Failed to load products. Please try again.
            </p>

            <Button
              type="primary"
              loading={isFetching}
              onClick={() => refetch()}
            >
              Try Again
            </Button>
          </div>
        )}
        {products && (
          <div className="grid grid-cols-4 gap-5 mt-5 w-full">
            {products.length ? (
              products.map((item: Product) => {
                return (
                  <CardProduct
                    key={item.id}
                    product={item}
                    handleClick={(e) => {
                      e.stopPropagation();
                      goTo(item.id);
                    }}
                  />
                );
              })
            ) : (
              <EmptyState message="Product not found" />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
