export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: CategoryProduct;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface CategoryProduct {
  id: number;
  name: string;
  slug: string;
  image: string;
  creationAt: string;
  updatedAt: string;
}

export interface FilterProducts {
  title: string;
  categoryId: string;
}
