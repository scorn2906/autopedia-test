import { useQuery } from "@tanstack/react-query";
import api from "../../../api/axios";
import type { FilterProducts, Product } from "../product.types";
import { ProductAPI } from "./product-api";

export const useProductsQuery = ({ title, categoryId }: FilterProducts) => {
  return useQuery({
    queryKey: ["products", { title, categoryId }],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (title) params.set("title", title);
      if (categoryId) params.set("categoryId", categoryId);
      const res = await api.get<Product[]>(
        `${ProductAPI.products}/?${params.toString()}`
      );
      return res.data || [];
    },
    retry: 2,
    retryDelay: 1000,
  });
};

export const useProductQuery = (id: string) => {
  return useQuery({
    queryKey: ["detail-product", id],
    queryFn: async () => {
      const res = await api.get<Product>(`${ProductAPI.products}/${id}`);
      return res.data;
    },
    enabled: !!id,
  });
};
