export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Classic T-Shirt",
    price: 199,
    image: "https://via.placeholder.com/300x300.png?text=Product+1",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Denim Jacket",
    price: 499,
    image: "https://via.placeholder.com/300x300.png?text=Product+2",
    category: "Clothing",
  },
  {
    id: 3,
    name: "Sneakers",
    price: 799,
    image: "https://via.placeholder.com/300x300.png?text=Product+3",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Leather Belt",
    price: 149,
    image: "https://via.placeholder.com/300x300.png?text=Product+4",
    category: "Accessories",
  },
];
