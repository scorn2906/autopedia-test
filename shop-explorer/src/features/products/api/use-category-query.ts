import { useQuery } from "@tanstack/react-query";
import api from "../../../api/axios";
import type { CategoryProduct } from "../product.types";
import { ProductAPI } from "./product-api";

export const useCategoryProductQuery = () => {
  return useQuery({
    queryKey: ["category-product"],
    queryFn: async () => {
      const res = await api.get<CategoryProduct[]>(ProductAPI.categoryProduct);
      return res.data;
    },
  });
};
