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
    name: "HP Laptop 15s",
    price: 599,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&h=400&fit=crop",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Dell Inspiron 15",
    price: 699,
    image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500&h=400&fit=crop",
    category: "Electronics",
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 1299,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=400&fit=crop",
    category: "Electronics",
  },
  {
    id: 4,
    name: "Lenovo ThinkPad E15",
    price: 799,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&h=400&fit=crop",
    category: "Electronics",
  },
   {
    id: 5,
    name: "Converse Chuck Taylor",
    price: 65,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&h=400&fit=crop",
    category: "Footwear",
  },
  {
    id: 6,
    name: "Vans Old Skool",
    price: 75,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&h=400&fit=crop",
    category: "Footwear",
  },
  {
    id: 7,
    name: "Levi's 501 Jeans",
    price: 89,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&h=400&fit=crop",
    category: "Clothing",
  },
  {
    id: 8,
    name: "Nike Dri-FIT T-Shirt",
    price: 35,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=400&fit=crop",
    category: "Clothing",
  },
];